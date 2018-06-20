if(document && !document.getElementById('_electron_css_sheet')) {
    const stylesheet = document.createElement('style');
    stylesheet.id = '_electron_css_sheet';
    document.body.appendChild(stylesheet);

    function clearCSS(_i = 0) {
        var sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;

        if (sheet.cssRules) {
            if(_i > sheet.cssRules.length) _i = 0;
            for (var i=_i; i<_i+10; i++) {
                if(sheet.cssRules[i]) {
                    const className = sheet.cssRules[i].selectorText.split('.')[1];
                    if (document.getElementsByClassName(className).length === 0) {
                        sheet.deleteRule(i);
                    }
                }
            }
            setTimeout(() => clearCSS(_i + 10), 5000);  
        }
    }
    clearCSS();
}

const jsonToCss = (_css) => {
  let css = '';
  for(key in _css) {
  	css += key+':'+_css[key]+';';
  }
  return css;
}

const CSS = (rules) => {
    const className = 'class'+Date.now() + parseInt(Math.random() * 100000);
    if(typeof rules !== 'string') {
      rules = jsonToCss(rules);
    }
    document.getElementById('_electron_css_sheet').innerHTML += '.'+className+' {'+rules+'}';
    return className;
}

if(module && module.exports) {
    module.exports = CSS;
}
else {
    window.CSS = CSS;
}