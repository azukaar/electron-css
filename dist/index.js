!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ElectronCSS=t():e.ElectronCSS=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GC_COLLECT_TIME=500},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaQuery=t.Keyframes=t.CSS=void 0;var r=n(0),o=["active","checked","disabled","empty","enabled","focus","hover","invalid","link","read-only","required","valid","visited"],s=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},c=function e(t,n){var r="",o="";for(var c in t)if(c.match(/^@media/))r+=e(t[c],c+"{ ."+n);else if(c.match(/^on/)){var i=s(c.replace(/^on[A-Z]/,function(e){return e.substr(-1).toLowerCase()}));r+=e(t[c],n+":"+i)}else if(c.match(/^\./))r+=c+" "+e(t[c],n);else{o+=s(c)+":"+t[c]+";"}return n&&n.match(/^@media/)?n+" {"+o+"}} "+r:n?"."+n+" {"+o+"} "+r:o};if("undefined"!=typeof document&&!document.getElementById("_electron_css_sheet")){var i=document.createElement("style");i.id="_electron_css_sheet",document.body.appendChild(i);var u=document.createElement("style");u.id="_electron_css_sheet_keyframes",document.body.appendChild(u),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=document.getElementById("_electron_css_sheet"),o=n.sheet?n.sheet:n.styleSheet,s=Math.floor(o.cssRules.length/2);if(s=(s=s<30?30:s)>500?500:s,o.cssRules){t>o.cssRules.length&&(t=0);for(var c=function(e){if(o.cssRules[e]&&o.cssRules[e].selectorText){var t=o.cssRules[e].selectorText.split(".")[1].split(":")[0];0===document.getElementsByClassName(t).length&&o.deleteRule(e)}else o.cssRules[e]&&Array.from(o.cssRules[e].cssRules).forEach(function(t){var n=t.selectorText.split(".")[1].split(":")[0];0===document.getElementsByClassName(n).length&&o.deleteRule(e)})},i=t;i<t+s;i++)c(i);setTimeout(function(){return e(t+s)},r.GC_COLLECT_TIME)}}()}t.CSS=function(e){var t="class"+Date.now()+parseInt(1e4*Math.random()),n="";"string"!=typeof e?(n=c(e,t),document.getElementById("_electron_css_sheet").innerHTML+=n):(n="."+t+" {"+e+"}",document.getElementById("_electron_css_sheet").innerHTML+=n);var r={cache:n+"",toString:function(){var e=document.getElementById("_electron_css_sheet"),r=e.sheet?e.sheet:e.styleSheet;if(Array.from(r.cssRules).some(function(e){return e.selectorText==="."+t}))return t;var o=n.split("}");return o.pop(),o.forEach(function(e){return r.insertRule(e+"}")}),t}};return o.forEach(function(e){var n=s(e);n=n.replace(/^[a-z]/,function(e){return e.toUpperCase()}),r["on"+n]="."+t+":"+e}),r},t.Keyframes=function(e){var t="keys"+Date.now()+parseInt(1e4*Math.random()),n="";if("string"!=typeof e)for(var r in e)n+="\n          "+r+" {\n            "+("string"==typeof e[r]?e[r]:c(e[r]))+"\n          }\n        ";else n=e;return document.getElementById("_electron_css_sheet_keyframes").innerHTML+="\n    @keyframes "+t+" {\n      "+n+"\n    }\n  ",t},t.MediaQuery=function(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var o in n){var c=n[o],i="";if(c.arrayValues)e=e.concat(c.arrayValues);else{for(var u in c)i+="("+s(u)+" : "+c[u]+") and ";i=i.substr(0,i.length-4);var a={};a.stringified=i,e.push(a)}}var l=function(){return e.some(function(e){return console.log(e.stringified,matchMedia(e.stringified).matches),matchMedia(e.stringified).matches})};return l.toString=function(){return"@media screen and "+e.map(function(e){return e.stringified}).join(", screen and ")},l.arrayValues=e,l}}])});