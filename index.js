if(document && !document.getElementById('_helium_css_sheet')) {
    const stylesheet = document.createElement('style');
    stylesheet.id = '_helium_css_sheet';
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

CSS = (rules) => {
    const className = "class"+Date.now() + parseInt(Math.random() * 99999);
    document.getElementById('_helium_css_sheet').innerHTML += "."+className+" {"+rules+"}";
    return className;
}

if(module && module.exports) {
    module.exports = CSS;
}
else {
    document.CSS = CSS;
}