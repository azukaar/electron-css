import { GC_COLLECT_TIME } from './config';
import colors from './color';
import units from './units';
import transform from './transform';

let testCounter = 0;

let documentElement = document;
let rootElement = document.head;

const setRootElement = (element) => {
  rootElement = element;
}

const setDocumentElement = (element) => {
  documentElement = element;
}

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
  if (getEnv() === 'test') {
    return testCounter++;
  } else {
    return Date.now() + Math.floor(Math.random() * 10000);
  }
}

const dynamicCssList = [];

const getDynamicRule = (unparsed) => {
  const id = unparsed.split('@@')[1];
  const rule = unparsed.split('@@')[2];
  if (typeof dynamicCssList[id].realValues[rule] === 'undefined') {
    console.error('ERROR CSS : ' + rule + ' doesn\'t exists on this dymamic rule set.');
    console.trace();
  }
  return dynamicCssList[id].realValues[rule];
}

const subscribeDynamicCSS = (className, unparsed, cb) => {
  const id = unparsed.split('@@')[1];
  dynamicCssList[id].subscribe(className, cb);
}

function DynamicCSS<T>(defaultValues: T): T {
  type dynamicObject = T & {
    subscribe: Function,
    refresh: Function,
    use: Function,
    inject: Function
  };
  const nextId = dynamicCssList.length;
  const result = new Proxy({
    id: nextId,
    realValues: defaultValues || {},
    subscribed: {},
    subscribe(className, cb) {
      this.subscribed[className] = cb;
    },
    refresh() {
      const oldSubs = Object.assign({}, this.subscribed);
      this.subscribed = {};

      Object.keys(oldSubs).forEach((className) => {
        if (documentElement.getElementsByClassName(className).length) {
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
      get: (target, name: string) => {
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

  return (result as any as dynamicObject);
};

const resetCSS = function () {
  testCounter = 0;
  const element = rootElement && rootElement.querySelector('#generated_css_target_sheet');
  if (element) {
    const stylesheet = documentElement.createElement('style');
    stylesheet.id = 'generated_css_target_sheet';
    rootElement.replaceChild(stylesheet, element);
  }
}

const clearCSS = function (_i = 0) {
  createTargetStyle();
  const stylesheet : HTMLStyleElement = rootElement && rootElement.querySelector('#generated_css_target_sheet');
  // @ts-ignore
  let sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;
  let nbToIt = Math.floor(sheet.cssRules.length / 2);
  nbToIt = nbToIt < 30 ? 30 : nbToIt;
  nbToIt = nbToIt > 500 ? 500 : nbToIt;

  if (sheet.cssRules) {
    if (_i > sheet.cssRules.length) _i = 0;
    for (let i = _i; i < _i + nbToIt; i++) {
      if (sheet.cssRules[i] && sheet.cssRules[i].selectorText) {
        const className = sheet.cssRules[i].selectorText.split('.')[1].split(':')[0].split(' ')[0];

        if (documentElement.getElementsByClassName(className).length === 0) {
          sheet.deleteRule(i);
        }
      } else if (sheet.cssRules[i]) {
        Array.from(sheet.cssRules[i].cssRules).forEach((value) => {
          // @ts-ignore
          const className = value.selectorText.split('.')[1].split(':')[0].split(' ')[0];

          if (documentElement.getElementsByClassName(className).length === 0) {
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

const jsonToCss = function (_css, className = "", refresh = () => { }) {
  let master = '';
  let css = '';

  for (let key in _css) {
    if (key.match(/^@media/)) {
      master += jsonToCss(_css[key], key + '{ .' + className);
    } else if (key.match(/^on/)) {
      const eventKey = caseConvert(key.replace(/^on[A-Z]/, match => match.substr(-1).toLowerCase()));

      master += jsonToCss(_css[key], className + ':' + eventKey);
    } else if (key.match(/^:/)) {
      master += jsonToCss(_css[key], className + key);
    } else if (typeof _css[key] !== null && typeof _css[key] === 'object' && !Array.isArray(_css[key]) && key.match(/^>/)) {
      master += jsonToCss(_css[key], className + ' ' + key.substr(2));
    } else if (typeof _css[key] !== null && typeof _css[key] === 'object' && !Array.isArray(_css[key])) {
      master += key + ' ' + jsonToCss(_css[key], className);
    } else {
      const dashKey = caseConvert(key);
      let value = _css[key];

      if (typeof value === 'undefined') {
        throw new Error('CSS Error : Value for `' + dashKey + '` is undefined.');
      }

      if (typeof value !== 'string' && value.length) {
        value = value.join(' ');
      }

      if (value.replace) {
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

  if (className && className.match(/^@media/)) {
    return `${className} {${css}}} ${master}`;
  } else if (className) {
    return `.${className} {${css}} ${master}`;
  } else {
    return css;
  }
}

type CSSElement = {
  onActive, onChecked, onDisabled, onEmpty, onEnabled, onFocus,
  onHover, onInvalid, onLink, onReadOnly, onRequired, onValid, onVisited,
  onLastOfType, onOnlyOfType, onOnlyChild, onOptional, oOnutOfRange, onFirstLine, onFirstLetter,
  asParent, 
  nthChild, lang, not, nthLstChild, nthLastOfType, nthOfType,
}

type CSSResult = {
  getStyle(): string;
  inject(): void;
  remove(callbackOnFirstSwap?: () => void): boolean;
  refresh(): any;
  toString(): string;
  inherit(): any;
}

const CSS = function (rules, name = 'class') : CSSResult & CSSElement & string {
  let className = name + randomId();
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
      createTargetStyle();
      const stylesheet : HTMLStyleElement = rootElement && rootElement.querySelector('#generated_css_target_sheet');
      // @ts-ignore 
      const sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;

      const ruleArray = this.getStyle().split('}');
      ruleArray.pop();
      ruleArray.filter(v => v.length).forEach(rule => {
        if (rule.match(/^\s*@media/)) {
          sheet.insertRule(rule + '}}', sheet.cssRules.length);
        } else {
          sheet.insertRule(rule + '}', sheet.cssRules.length);
        }
      });
    },

    remove(callbackOnFirstSwap = () => { }) {
      let existed = false;
      const oldCN = className;
      className = name + randomId();
      Array.from(documentElement.getElementsByClassName(oldCN)).forEach((element) => {
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
      createTargetStyle();
      const stylesheet : HTMLStyleElement = rootElement && rootElement.querySelector('#generated_css_target_sheet');
      // @ts-ignore
      const sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;

      // @ts-ignore
      if (!Array.from(sheet.cssRules).some(r => r.selectorText === '.' + className)) {
        this.inject();
      }
      return className;
    },

    inherit() {
      return rules;
    }
  };

  const patchForPseudoElement = (className, object) : CSSElement => {
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

  return result as CSSResult & CSSElement & string;
}

CSS.next = (selector) => '> ' + selector;

const Keyframes = function (rules) {
  createTargetStyle();
  const keysName = 'keys' + randomId();
  let result = '';

  if (typeof rules !== 'string') {
    for (let key in rules) {
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
    result = rules;
  }

  rootElement.querySelector('#generated_css_target_sheet_keyframes').innerHTML += `
    @keyframes ${keysName} {
      ${result}
    }
  `;

  return keysName;
}

const MediaQuery = function (...set) {
  createTargetStyle();
  let arrayValues = [];

  for (let mediaQueryIndex in set) {
    const mediaQuery = set[mediaQueryIndex];
    let stringified = '';

    if (mediaQuery.arrayValues) {
      arrayValues = arrayValues.concat(mediaQuery.arrayValues);
    } else {
      for (let ruleIndex in mediaQuery) {
        stringified += `(${caseConvert(ruleIndex)} : ${mediaQuery[ruleIndex]}) and `;
      }

      stringified = stringified.substr(0, stringified.length - 4);

      const result = {}
      // @ts-ignore
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
  // @ts-ignore
  media.arrayValues = arrayValues;

  return media;
}

const classes = function (classes) {
  if (Array.isArray(classes)) {
    return classes.join(' ');
  } else {
    const result = [];
    for (let cl in classes) {
      if (classes[cl]) {
        result.push(cl);
      }
    }
    return result.join(' ');
  }
}

const calc = function (...elements) {
  return 'calc(' + elements.join(' ') + ')';
}

function createTargetStyle() {
  if (typeof rootElement !== 'undefined' && !rootElement.querySelector('#generated_css_target_sheet')) {
    const stylesheet = documentElement.createElement('style');
    stylesheet.id = 'generated_css_target_sheet';
    rootElement.appendChild(stylesheet);

    const stylesheetKeyframes = documentElement.createElement('style');
    stylesheetKeyframes.id = 'generated_css_target_sheet_keyframes';
    rootElement.appendChild(stylesheetKeyframes);

    clearCSS();
  }
}

const is = {
  'active': (arg) => `:active(${arg})`,
  'checked': (arg) => `:checked(${arg})`,
  'disabled': (arg) => `:disabled(${arg})`,
  'empty': (arg) => `:empty(${arg})`,
  'enabled': (arg) => `:enabled(${arg})`,
  'focus': (arg) => `:focus(${arg})`,
  'hover': (arg) => `:hover(${arg})`,
  'invalid': (arg) => `:invalid(${arg})`,
  'link': (arg) => `:link(${arg})`,
  'readOnly': (arg) => `:read-only(${arg})`,
  'required': (arg) => `:required(${arg})`,
  'valid': (arg) => `:valid(${arg})`,
  'visited': (arg) => `:visited(${arg})`,
  'lastOfType': (arg) => `:last-of-type(${arg})`,
  'onlyOfType': (arg) => `:only-of-type(${arg})`,
  'onlyChild': (arg) => `:only-child(${arg})`,
  'optional': (arg) => `:optional(${arg})`,
  'outOfRange': (arg) => `:out-of-range(${arg})`,
  'firstLine': (arg) => `:first-line(${arg})`,
  'firstLetter': (arg) => `:first-letter(${arg})`,
  'nthChild': (arg) => `:nth-child(${arg})`,
  'lang': (arg) => `:lang(${arg})`,
  'not': (arg) => `:not(${arg})`,
  'nthLastChild': (arg) => `:nth-last-child(${arg})`,
  'nthLastOfType': (arg) => `:nth-last-of-lype(${arg})`,
  'nthOfType': (arg) => `:nth-of-type(${arg})`,
};


export {
  CSS,
  calc,
  resetCSS,
  Keyframes,
  MediaQuery,
  classes,
  setRootElement,
  setDocumentElement,
  colors,
  units,
  is,
  transform,
  DynamicCSS
};
