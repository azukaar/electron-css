import {GC_COLLECT_TIME} from './config';
import color from './color';
import units from './units';
import constants from './constants';

let testCounter = 0;

const pseudoClassList = [
  'active', 'checked', 'disabled', 'empty', 'enabled', 'focus',
  'hover', 'invalid', 'link', 'read-only', 'required', 'valid', 'visited',
  'lastOfType', 'onlyOfType', 'onlyChild', 'optional', 'outOfRange', 'firstLine', 'firstLetter', 
];

const pseudoFunctionsList = [
  'nthChild', 'lang', 'not', 'nthLstChild', 'nthLastOfType', 'nthOfType',
];

const getEnv = function () {
  if (typeof global !== 'undefined' && global['process']
        && global['process']['env'] && global['process']['env']['NODE_ENV']) {
    return global['process']['env']['NODE_ENV'];
  } else {
    return 'production';
  }
}

const randomId = function () {
  if(getEnv() === 'test') {
    return testCounter++;
  } else {
    return Date.now() + parseInt(Math.random() * 10000);
  }
}

const dynamicCssList = [];

const getDynamicRule = (unparsed) => {
  const id = unparsed.split('@@')[1];
  const rule = unparsed.split('@@')[2];
  if(typeof dynamicCssList[id].realValues[rule] === 'undefined') {
    console.error('ERROR CSS : ' + rule + ' doesn\'t exists on this dymamic rule set.');
    console.trace();
  }
  return dynamicCssList[id].realValues[rule];
}

const subscribeDynamicCSS = (className, unparsed, cb) => {
  const id = unparsed.split('@@')[1];
  dynamicCssList[id].subscribe(className, cb);
}

const DynamicCSS = (defaultValues = {}) => {
  const nextId = dynamicCssList.length;
  const result =  new Proxy({
    id: nextId,
    realValues: defaultValues,
    subscribed: {},
    subscribe(className, cb) {
      this.subscribed[className] = cb;
    },
    refresh() {
      const oldSubs = Object.assign({}, this.subscribed);
      this.subscribed = {};

      Object.keys(oldSubs).forEach((className) => {
        if(document.getElementsByClassName(className).length) {
          oldSubs[className]();
        }
      })
    },
    use(obj) {
      this.realValues = Object.assign({}, obj);
      this.refresh();
    },
    inject(obj) {
      this.realValues = Object.assign({}, this.realValues, obj);
      this.refresh();
    }
  }, {
    get: (target, name) => {
      if (typeof target[name] !== 'undefined') {
        return target[name];
      } else {
        return '#@@' + target.id + '@@' + name;
      }
    },
    set: (target, name, value) => {
      if (typeof target[name] !== 'undefined') {
        target[name] = value;
      } else {
        target.realValues[name] = value;
      }
      return true;
    }
  });
  dynamicCssList.push(result);
  return result;
};

const resetCSS = function () {
  testCounter = 0;
  const element = document.getElementById('_electron_css_sheet');
  const stylesheet = document.createElement('style');
  stylesheet.id = '_electron_css_sheet';
  document.body.replaceChild(stylesheet, element);
}

const clearCSS = function (_i = 0) {
  const stylesheet = document.getElementById('_electron_css_sheet');
  let sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;
  let nbToIt = Math.floor(sheet.cssRules.length / 2);
  nbToIt = nbToIt < 30 ? 30 : nbToIt;
  nbToIt = nbToIt > 500 ? 500 : nbToIt;
  
  if (sheet.cssRules) {
    if (_i > sheet.cssRules.length) _i = 0;
    for (let i = _i; i < _i + nbToIt; i++) {
      if (sheet.cssRules[i] && sheet.cssRules[i].selectorText) {
        const className = sheet.cssRules[i].selectorText.split('.')[1].split(':')[0];

        if (document.getElementsByClassName(className).length === 0) {
          sheet.deleteRule(i);
        }
      } else if(sheet.cssRules[i]){
        Array.from(sheet.cssRules[i].cssRules).forEach( (value) => {
          const className = value.selectorText.split('.')[1].split(':')[0];

          if (document.getElementsByClassName(className).length === 0) {
            sheet.deleteRule(i);
          }
        });
      }
    }
    setTimeout(() => clearCSS(_i + nbToIt), GC_COLLECT_TIME);
  }
}

const caseConvert = function (str) {
  return str.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
}

const jsonToCss = function (_css, className, refresh = () => {}) {
  let master = '';
  let css = '';

  for (let key in _css) {
    if(key.match(/^@media/)) {
      master += jsonToCss(_css[key], key + '{ .' + className);
    } else if (key.match(/^on/)) {
      const eventKey = caseConvert(key.replace(/^on[A-Z]/, match => match.substr(-1).toLowerCase()));

      master += jsonToCss(_css[key], className + ':' + eventKey);
    } else if (key.match(/^\./)) {
      master += key + ' ' + jsonToCss(_css[key], className);
    } else {
      const dashKey = caseConvert(key);
      let value = _css[key];

      if(typeof value === 'undefined') {
        throw new Error('CSS Error : Value for `' + dashKey + '` is undefined.');
      }

      if(typeof value !== 'string' && value.length) {
        value = value.join(' ');
      }

      if(value.replace) {
        value = value.replace(/#@@\d+@@[a-zA-Z0-9_]+/g, (matched) => {
          subscribeDynamicCSS(className, matched, refresh);
          return getDynamicRule(matched);
        });
      }

      if (dashKey === 'content') {
        value = `"${value}"`;
      }

      css += dashKey + ':' + value + ';';
    }
  }

  if(className && className.match(/^@media/)) {
    return `${className} {${css}}} ${master}`;
  } else if (className) {
    return `.${className} {${css}} ${master}`;
  } else {
    return css;
  }
}

const CSS = function (rules) {
  let className = 'class' + randomId();
  const stylesheet = document.getElementById('_electron_css_sheet');
  const sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;
  let temp = '';

  const result = {
    getStyle() {
      if (typeof rules !== 'string') {
        temp = jsonToCss(rules, className, () => this.refresh());
      } else {
        temp = '.' + className + ' {' + rules + '}';
      }
      return temp;
    },
    
    inject() {
      const ruleArray = this.getStyle().split('}');
      ruleArray.pop();
      ruleArray.filter(v=>v.length).forEach(rule => {
        if(rule.match(/^\s*@media/)) {
          sheet.insertRule(rule + '}}', sheet.cssRules.length);
        } else {
          sheet.insertRule(rule + '}', sheet.cssRules.length);
        }
      });
    },

    remove(callbackOnFirstSwap = () => {}) {
      let existed = false;
      const oldCN = className;
      className = 'class' + randomId();
      Array.from(document.getElementsByClassName(oldCN)).forEach( (element) => {
          if (!existed) {
            callbackOnFirstSwap();
          }
          existed = true;
          element.className = element.className.replace(oldCN, className);
      });

      return existed;
    },

    refresh() {
      let existed = this.remove(() => this.inject());
      return existed;
    },
    
    toString() {
      if (!Array.from(sheet.cssRules).some(r => r.selectorText === '.' + className)) {
        this.inject();
      }
      return className;
    },

    inherit() {
      return rules;
    }
  };

  const patchForPseudoElement = (className, object) => {
    pseudoClassList.forEach(pc => {
      let methodName = pc.replace(/^[a-z]/, match => match.toUpperCase());
      let realMethodName = caseConvert(pc);

      Object.defineProperties(object, {
        ['on' + methodName]: {
          get: () => {
            const newClass = className + ':' + realMethodName;
            return patchForPseudoElement(newClass, {
              toString() {
                return newClass;
              }
            });
          }
        }
      });
    });

    pseudoFunctionsList.forEach(pc => {
      let realMethodName = caseConvert(pc);

      object[pc] = (arg) => {
        const newClass = className + ':' + realMethodName + '(' + arg + ')';
        return patchForPseudoElement(newClass, {
          toString() {
            return newClass;
          }
        });
      }
    });

    Object.defineProperties(object, {
      asParent: {
        get: () => {
          return className;
        }
      }
    });

    return object;
  };

  patchForPseudoElement('.' + className, result);

  result.inject();

  return result;
}

const Keyframes = function (rules) {
  const keysName = 'keys' + randomId();
  let result = '';

  if(typeof rules !== 'string') {
    for(let key in rules) {
      const value = typeof rules[key] === 'string' ? 
        rules[key] : jsonToCss(rules[key])

        result += `
          ${key} {
            ${value}
          }
        `;
    };
  }
  else {
    result  = rules;
  }

  document.getElementById('_electron_css_sheet_keyframes').innerHTML += `
    @keyframes ${keysName} {
      ${result}
    }
  `;

  return keysName;
}

const MediaQuery = function (...set) {
  let arrayValues = [];

  for(let mediaQueryIndex in set) {
    const mediaQuery = set[mediaQueryIndex];
    let stringified = '';
    
    if (mediaQuery.arrayValues) {
      arrayValues = arrayValues.concat(mediaQuery.arrayValues);
    } else {
      for(let ruleIndex in mediaQuery) {
        stringified += `(${caseConvert(ruleIndex)} : ${mediaQuery[ruleIndex]}) and `;
      }

      stringified = stringified.substr(0, stringified.length - 4);

      const result = {}

      result.stringified = stringified;

      arrayValues.push(result);
    }
  }

  let media = function () {
    return arrayValues.some((value) => {
      return matchMedia(value.stringified).matches
    });
  }

  media.toString = () => '@media screen and ' + arrayValues.map(v => v.stringified).join(', screen and ');
  media.arrayValues = arrayValues;

  return media;
}

const classes = function (classes) {
  if(Array.isArray(classes)) {
    return classes.join(' ');
  } else {
    const result = [];
    for(let cl in classes) {
      if (classes[cl]) {
        result.push(cl);
      }
    }
    return result.join(' ');
  }
}

const calc = function(...elements) {
  return 'calc('+elements.join(' ')+')';
}

if (typeof document !== 'undefined' && !document.getElementById('_electron_css_sheet')) {
  const stylesheet = document.createElement('style');
  stylesheet.id = '_electron_css_sheet';
  document.body.appendChild(stylesheet);

  const stylesheetKeyframes = document.createElement('style');
  stylesheetKeyframes.id = '_electron_css_sheet_keyframes';
  document.body.appendChild(stylesheetKeyframes);

  clearCSS();
}

export {
  CSS,
  calc,
  resetCSS,
  Keyframes,
  MediaQuery,
  classes,
  color,
  units,
  constants,
  DynamicCSS
};
