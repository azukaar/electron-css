!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GC_COLLECT_TIME=500},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearCSS=t.caseConvert=t.jsonToCss=t.CSS=void 0;var r=n(0),o=["active","checked","disabled","empty","enabled","focus","hover","invalid","link","read-only","required","valid","visited"],s=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=document.getElementById("_electron_css_sheet"),o=n.sheet?n.sheet:n.styleSheet,s=Math.floor(o.cssRules.length/2);if(s=(s=s<30?30:s)>500?500:s,o.cssRules){t>o.cssRules.length&&(t=0);for(var u=t;u<t+s;u++)if(o.cssRules[u]){var c=o.cssRules[u].selectorText.split(".")[1].split(":")[0];0===document.getElementsByClassName(c).length&&o.deleteRule(u)}setTimeout(function(){return e(t+s)},r.GC_COLLECT_TIME)}},u=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},c=function e(t,n){var r="",o="";for(var s in t)if(s.match(/^on/)){var c=u(s.replace(/^on[A-Z]/,function(e){return e.substr(-1).toLowerCase()}));r+=e(t[s],n+":"+c)}else if(s.match(/^\./))r+=s+" "+e(t[s],n);else{o+=u(s)+":"+t[s]+";"}return"."+n+" {"+o+"} "+r},l=function(e){var t="class"+Date.now()+parseInt(1e4*Math.random()),n="";"string"!=typeof e?(n=c(e,t),document.getElementById("_electron_css_sheet").innerHTML+=n):(n="."+t+" {"+e+"}",document.getElementById("_electron_css_sheet").innerHTML+=n);var r={cache:n+"",toString:function(){var e=document.getElementById("_electron_css_sheet"),r=e.sheet?e.sheet:e.styleSheet;if(Array.from(r.cssRules).some(function(e){return e.selectorText==="."+t}))return t;var o=n.split("}");return o.pop(),o.forEach(function(e){return r.insertRule(e+"}")}),t}};return o.forEach(function(e){var n=u(e);n=n.replace(/^[a-z]/,function(e){return e.toUpperCase()}),r["on"+n]="."+t+":"+e}),r};if("undefined"!=typeof document&&!document.getElementById("_electron_css_sheet")){var i=document.createElement("style");i.id="_electron_css_sheet",document.body.appendChild(i),s()}t.default=l,t.CSS=l,t.jsonToCss=c,t.caseConvert=u,t.clearCSS=s,window.CSS=l}]);