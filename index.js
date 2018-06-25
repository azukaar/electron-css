if(typeof document !== 'undefined' && !document.getElementById('_electron_css_sheet')) {
    const stylesheet = document.createElement('style');
    stylesheet.id = '_electron_css_sheet';
    document.body.appendChild(stylesheet);
}

const jsonToCss = function (_css, className) {
  let master = '';
  let css = '';

  for(key in _css) {
    if (key.match(/^on/)) {
      const eventKey = key.replace(/^on[A-Z]/, function (match) {
        return ':' + match.substr(-1).toLowerCase()
      });
      master += jsonToCss(_css[key], className+eventKey);
    } else {
      const dashKey = key.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase()
      });
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
    return className;
}

if(typeof module !== 'undefined' && module.exports) {
    module.exports = CSS;
}
else {
    window.CSS = CSS;
}