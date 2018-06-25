const pseudoClassList = [
  'active', 'checked', 'disabled', 'empty', 'enabled', 'focus',
  'hover', 'invalid', 'link', 'read-only', 'required', 'valid', 'visited'
] 

if(typeof document !== 'undefined' && !document.getElementById('_electron_css_sheet')) {
    const stylesheet = document.createElement('style');
    stylesheet.id = '_electron_css_sheet';
    document.body.appendChild(stylesheet);
}

function caseConvert(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
}

const jsonToCss = function (_css, className) {
  let master = '';
  let css = '';

  for(key in _css) {
    if (key.match(/^on/)) {
      const eventKey = caseConvert(key.replace(/^on[A-Z]/, function (match) {
        return match.substr(-1).toLowerCase()
      }));

      master += jsonToCss(_css[key], className + ':' + eventKey);
    } else if (key.match(/^\./)) {
      master += key + ' ' + jsonToCss(_css[key], className);
    } else {
      const dashKey = caseConvert(key);
      css += dashKey+':'+_css[key]+';';
    }
  }

  return `.${className} {${css}} ${master}`;
}

const CSS = function(rules) {
    const className = 'class' + Date.now() + parseInt(Math.random() * 10000);
    if(typeof rules !== 'string') {
      rules = jsonToCss(rules, className);
      document.getElementById('_electron_css_sheet').innerHTML += rules;
    } else {
        document.getElementById('_electron_css_sheet').innerHTML += '.'+className+' {'+rules+'}';
    }

    const result = {
      toString() {
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

if(typeof module !== 'undefined' && module.exports) {
    module.exports = CSS;
}
else {
    window.CSS = CSS;
}