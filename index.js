if(typeof document !== 'undefined' && !document.getElementById('_electron_css_sheet')) {
    const stylesheet = document.createElement('style');
    stylesheet.id = '_electron_css_sheet';
    document.body.appendChild(stylesheet);

    function clearCSS(_i = 0) {
        var sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;

        if (sheet.cssRules) {
            if(_i > sheet.cssRules.length) _i = 0;
            for (var i=_i; i<_i+10; i++) {
                if(sheet.cssRules[i]) {
                    const className = sheet.cssRules[i].selectorText.split('.')[1].split(':')[0];

                    if (document.getElementsByClassName(className).length === 0) {
                        sheet.deleteRule(i);
                    }
                }
            }
            setTimeout(() => clearCSS(_i + 10), 10000);  
        }
    }
    clearCSS();
}

const jsonToCss = (_css, className) => {
  let master = '';
  let css = '';

  for(key in _css) {
    if (key.match(/^:/)) {
      master += jsonToCss(_css[key], className+key);
    } else {
      css += key+':'+_css[key]+';';
    }
  }

  return `.${className} {${css}} ${master}`;
}

const CSS = (rules) => {
    const className = 'class'+Date.now() + parseInt(Math.random() * 100000);
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