const pseudoClassList = [
  'active', 'checked', 'disabled', 'empty', 'enabled', 'focus',
  'hover', 'invalid', 'link', 'read-only', 'required', 'valid', 'visited'
];

if (typeof document !== 'undefined' && !document.getElementById('_electron_css_sheet')) {
  const stylesheet = document.createElement('style');
  stylesheet.id = '_electron_css_sheet';
  document.body.appendChild(stylesheet);

  function clearCSS(_i = 0) {
    var sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;
    let nbToIt = Math.floor(sheet.cssRules.length / 2);
    nbToIt = nbToIt < 30 ? 30 : nbToIt;
    nbToIt = nbToIt > 500 ? 500 : nbToIt;
    
    if (sheet.cssRules) {
      if (_i > sheet.cssRules.length) _i = 0;
      for (var i = _i; i < _i + nbToIt; i++) {
        if (sheet.cssRules[i]) {
          const className = sheet.cssRules[i].selectorText.split('.')[1].split(':')[0];

          if (document.getElementsByClassName(className).length === 0) {
            sheet.deleteRule(i);
          }
        }
      }
      setTimeout(() => clearCSS(_i + nbToIt), 5000);
    }
  }
  clearCSS();
}

function caseConvert(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
}

const jsonToCss = function (_css, className) {
  let master = '';
  let css = '';

  for (key in _css) {
    if (key.match(/^on/)) {
      const eventKey = caseConvert(key.replace(/^on[A-Z]/, function (match) {
        return match.substr(-1).toLowerCase()
      }));

      master += jsonToCss(_css[key], className + ':' + eventKey);
    } else if (key.match(/^\./)) {
      master += key + ' ' + jsonToCss(_css[key], className);
    } else {
      const dashKey = caseConvert(key);
      css += dashKey + ':' + _css[key] + ';';
    }
  }

  return `.${className} {${css}} ${master}`;
}

const CSS = function (rules) {
  const className = 'class' + Date.now() + parseInt(Math.random() * 10000);
  let temp = '';
  if (typeof rules !== 'string') {
    temp = jsonToCss(rules, className);
    document.getElementById('_electron_css_sheet').innerHTML += temp;
  } else {
    temp = '.' + className + ' {' + rules + '}';
    document.getElementById('_electron_css_sheet').innerHTML += temp;
  }

  const result = {
    cache: temp + '',
    toString() {
    	const stylesheet = document.getElementById('_electron_css_sheet');
	    const sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;
      if (Array.from(sheet.rules).some(r => r.selectorText === '.' + className)) {
        return className;
      }
      const ruleArray = temp.split('}');
      ruleArray.pop();
      ruleArray.forEach(rule => sheet.insertRule(rule));
      return className;
    }
  };

  pseudoClassList.forEach(pc => {
    let methodName = caseConvert(pc);
    methodName = methodName.replace(/^[a-z]/, function (match) {
      return match.toUpperCase()
    });
    result['on' + methodName] = '.' + className + ':' + pc;
  });

  return result;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CSS;
} else {
  window.CSS = CSS;
}