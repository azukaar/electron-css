!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ElectronCSS=e():i.ElectronCSS=e()}("undefined"!=typeof self?self:this,function(){return function(i){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return i[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=i,t.c=e,t.d=function(i,e,n){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:n})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)t.d(n,r,function(e){return i[e]}.bind(null,r));return n},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=5)}([function(i,e,t){"use strict";var n=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},r={none:"none",matrix:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return"matrix("+e.join(",")+")"},matrix3d:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return"matrix3d("+e.join(",")+")"},translate:function(i){return"translate("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+")"},translate3d:function(i){return"translate3d("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+", "+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+")"},translateX:function(i){return"translateX("+i+")"},translateY:function(i){return"translateY("+Y+")"},translateZ:function(i){return"translateZ("+Z+")"},scale:function(i){return"scale("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+")"},scale3d:function(i){return"scale3d("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+", "+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+")"},scaleX:function(i){return"scaleX("+i+")"},scaleY:function(i){return"scaleY("+Y+")"},scaleZ:function(i){return"scaleZ("+Z+")"},rotate:function(i){return"rotate("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+")"},rotate3d:function(i){return"rotate3d("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+", "+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+")"},rotateX:function(i){return"rotateX("+i+")"},rotateY:function(i){return"rotateY("+Y+")"},rotateZ:function(i){return"rotateZ("+Z+")"},skew:function(i){return"skew("+i+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+")"},skewY:function(i){return"skewY("+Y+")"},skewZ:function(i){return"skewZ("+Z+")"},perspective:function(i){return"perspective("+i+")"}},a={alignContent:{stretch:"stretch",center:"center",flexStart:"flex-start",flexEnd:"flex-end",spaceBetween:"space-between",spaceAround:"space-around",initial:"initial",inherit:"inherit"},alignItems:{stretch:"stretch",center:"center",flexStart:"flex-start",flexEnd:"flex-end",baseline:"baseline",initial:"initial",inherit:"inherit"},alignSelf:{auto:"auto",stretch:"stretch",center:"center",flexStart:"flex-start",flexEnd:"flex-end",baseline:"baseline",initial:"initial",inherit:"inherit"},animation:{initial:"initial",inherit:"inherit"},animationDelay:{initial:"initial",inherit:"inherit"},animationDirection:{normal:"normal",reverse:"reverse",alternate:"alternate",alternateReverse:"alternate-reverse",initial:"initial",inherit:"inherit"},animationDuration:{initial:"initial",inherit:"inherit"},animationFillMode:{none:"none",forwards:"forwards",backwards:"backwards",both:"both",initial:"initial",inherit:"inherit"},animationIterationCount:{infinite:"infinite",initial:"initial",inherit:"inherit"},animationName:{none:"none",initial:"initial",inherit:"inherit"},animationPlayState:{paused:"paused",running:"running",initial:"initial",inherit:"inherit"},backfaceVisibility:{visible:"visible",hidden:"hidden",initial:"initial",inherit:"inherit"},background:{initial:"initial",inherit:"inherit"},backgroundAttachment:{scroll:"scroll",fixed:"fixed",local:"local",initial:"initial",inherit:"inherit"},backgroundClip:{borderBox:"border-box",paddingBox:"padding-box",contentBox:"content-box",initial:"initial",inherit:"inherit"},backgroundColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},backgroundImage:{none:"none",initial:"initial",inherit:"inherit"},backgroundOrigin:{paddingBox:"padding-box",borderBox:"border-box",contentBox:"content-box",initial:"initial",inherit:"inherit"},backgroundPosition:{initial:"initial",inherit:"inherit"},backgroundRepeat:{repeat:"repeat",repeatX:"repeat-x",repeatY:"repeat-y",noRepeat:"no-repeat",initial:"initial",inherit:"inherit"},backgroundSize:{auto:"auto",initial:"initial",inherit:"inherit"},border:{initial:"initial",inherit:"inherit"},borderBottom:{initial:"initial",inherit:"inherit"},borderBottomColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},borderBottomLeftRadius:{initial:"initial",inherit:"inherit"},borderBottomRightRadius:{initial:"initial",inherit:"inherit"},borderBottomStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},borderBottomWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},borderCollapse:{separate:"separate",collapse:"collapse",initial:"initial",inherit:"inherit"},borderColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},borderImage:{initial:"initial",inherit:"inherit"},borderImageOutset:{initial:"initial",inherit:"inherit"},borderImageRepeat:{space:"space",initial:"initial",inherit:"inherit"},borderImageSlice:{initial:"initial",inherit:"inherit"},borderImageSource:{initial:"initial",inherit:"inherit"},borderImageWidth:{auto:"auto",initial:"initial",inherit:"inherit"},borderLeft:{initial:"initial",inherit:"inherit"},borderLeftColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},borderLeftStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},borderLeftWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},borderRadius:{initial:"initial",inherit:"inherit"},borderRight:{initial:"initial",inherit:"inherit"},borderRightColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},borderRightStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},borderRightWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},borderSpacing:{initial:"initial",inherit:"inherit"},borderStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},borderTop:{initial:"initial",inherit:"inherit"},borderTopColor:{transparent:"transparent",initial:"initial",inherit:"inherit"},borderTopLeftRadius:{initial:"initial",inherit:"inherit"},borderTopRightRadius:{initial:"initial",inherit:"inherit"},borderTopStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},borderTopWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},borderWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},bottom:{auto:"auto",initial:"initial",inherit:"inherit"},boxShadow:{none:"none",inset:"inset",initial:"initial",inherit:"inherit"},boxSizing:{initial:"initial",inherit:"inherit",borderBox:"border-box",contentBox:"content-box"},captionSide:{top:"top",bottom:"bottom",initial:"initial",inherit:"inherit"},clear:{none:"none",left:"left",right:"right",both:"both",initial:"initial",inherit:"inherit"},clip:{auto:"auto",initial:"initial",inherit:"inherit"},color:{initial:"initial",inherit:"inherit"},columnCount:{auto:"auto",initial:"initial",inherit:"inherit"},columnFill:{balance:"balance",auto:"auto",initial:"initial",inherit:"inherit"},columnGap:{normal:"normal",initial:"initial",inherit:"inherit"},columnRule:{initial:"initial",inherit:"inherit"},columnRuleColor:{initial:"initial",inherit:"inherit"},columnRuleStyle:{initial:"initial",inherit:"inherit"},columnRuleWidth:{initial:"initial",inherit:"inherit"},columnSpan:{1:"1",all:"all",initial:"initial",inherit:"inherit"},columnWidth:{auto:"auto",initial:"initial",inherit:"inherit"},columns:{auto:"auto",initial:"initial",inherit:"inherit"},content:{normal:"normal",none:"none",counter:"counter",openQuote:"open-quote",closeQuote:"close-quote",noOpenQuote:"no-open-quote",noCloseQuote:"no-close-quote",initial:"initial",inherit:"inherit"},counterIncrement:{none:"none",initial:"initial",inherit:"inherit"},counterReset:{none:"none",initial:"initial",inherit:"inherit"},cursor:{alias:"alias",allScroll:"all-scroll",auto:"auto",cell:"cell",contextMenu:"context-menu",colResize:"col-resize",copy:"copy",crosshair:"crosshair",default:"default",eResize:"e-resize",ewResize:"ew-resize",grab:"grab",grabbing:"grabbing",help:"help",move:"move",nResize:"n-resize",neResize:"ne-resize",neswResize:"nesw-resize",nsResize:"ns-resize",nwResize:"nw-resize",nwseResize:"nwse-resize",noDrop:"no-drop",none:"none",notAllowed:"not-allowed",pointer:"pointer",progress:"progress",rowResize:"row-resize",sResize:"s-resize",seResize:"se-resize",swResize:"sw-resize",text:"text",verticalText:"vertical-text",wResize:"w-resize",wait:"wait",zoomIn:"zoom-in",zoomOut:"zoom-out",initial:"initial",inherit:"inherit"},direction:{ltr:"ltr",rtl:"rtl",initial:"initial",inherit:"inherit"},display:{inline:"inline",block:"block",flex:"flex",inlineBlock:"inline-block",inlineFlex:"inline-flex",inlineTable:"inline-table",listItem:"list-item",runIn:"run-in",table:"table",tableCaption:"table-caption",tableHeaderGroup:"table-header-group",tableFooterGroup:"table-footer-group",tableRowGroup:"table-row-group",tableCell:"table-cell",tableColumn:"table-column",tableRow:"table-row",none:"none",initial:"initial",inherit:"inherit"},emptyCells:{show:"show",hide:"hide",initial:"initial",inherit:"inherit"},flex:{auto:"auto",initial:"initial",none:"none",inherit:"inherit"},flexBasis:{auto:"auto",initial:"initial",inherit:"inherit"},flexDirection:{row:"row",rowReverse:"row-reverse",column:"column",columnReverse:"column-reverse",initial:"initial",inherit:"inherit"},flexFlow:{initial:"initial",inherit:"inherit"},flexGrow:{initial:"initial",inherit:"inherit"},flexShrink:{initial:"initial",inherit:"inherit"},flexWrap:{nowrap:"nowrap",wrap:"wrap",wrapReverse:"wrap-reverse",initial:"initial",inherit:"inherit"},float:{none:"none",left:"left",right:"right",initial:"initial",inherit:"inherit"},font:{caption:"caption",icon:"icon",menu:"menu",messageBox:"message-box",smallCaption:"small-caption",statusBar:"status-bar",initial:"initial",inherit:"inherit"},fontFamily:{initial:"initial",inherit:"inherit"},fontSize:{medium:"medium",xxSmall:"xx-small",xSmall:"x-small",small:"small",large:"large",xLarge:"x-large",xxLarge:"xx-large",smaller:"smaller",larger:"larger",initial:"initial",inherit:"inherit"},fontSizeAdjust:{none:"none",initial:"initial",inherit:"inherit"},fontStretch:{ultraCondensed:"ultra-condensed",extraCondensed:"extra-condensed",condensed:"condensed",semiCondensed:"semi-condensed",normal:"normal",semiExpanded:"semi-expanded",expanded:"expanded",extraExpanded:"extra-expanded",ultraExpanded:"ultra-expanded",initial:"initial",inherit:"inherit"},fontStyle:{normal:"normal",italic:"italic",oblique:"oblique",initial:"initial",inherit:"inherit"},fontVariant:{normal:"normal",smallCaps:"small-caps",initial:"initial",inherit:"inherit"},fontWeight:{normal:"normal",bold:"bold",bolder:"bolder",lighter:"lighter",initial:"initial",inherit:"inherit"},hangingPunctuation:{none:"none",first:"first",last:"last",allowEnd:"allow-end",forceEnd:"force-end",initial:"initial",inherit:"inherit"},height:{auto:"auto",initial:"initial",inherit:"inherit"},justifyContent:{flexStart:"flex-start",flexEnd:"flex-end",center:"center",spaceBetween:"space-between",spaceAround:"space-around",initial:"initial",inherit:"inherit"},left:{auto:"auto",initial:"initial",inherit:"inherit"},letterSpacing:{normal:"normal",initial:"initial",inherit:"inherit"},lineHeight:{normal:"normal",initial:"initial",inherit:"inherit"},listStyle:{initial:"initial",inherit:"inherit"},listStyleImage:{none:"none",url:"url",initial:"initial",inherit:"inherit"},listStylePosition:{inside:"inside",outside:"outside",initial:"initial",inherit:"inherit"},listStyleType:{disc:"disc",armenian:"armenian",circle:"circle",cjkIdeographic:"cjk-ideographic",decimal:"decimal",decimalLeadingZero:"decimal-leading-zero",georgian:"georgian",hebrew:"hebrew",hiragana:"hiragana",hiraganaIroha:"hiragana-iroha",katakana:"katakana",katakanaIroha:"katakana-iroha",lowerAlpha:"lower-alpha",lowerGreek:"lower-greek",lowerLatin:"lower-latin",lowerRoman:"lower-roman",none:"none",square:"square",upperAlpha:"upper-alpha",upperLatin:"upper-latin",upperRoman:"upper-roman",initial:"initial",inherit:"inherit"},margin:{auto:"auto",initial:"initial",inherit:"inherit"},marginBottom:{auto:"auto",initial:"initial",inherit:"inherit"},marginLeft:{auto:"auto",initial:"initial",inherit:"inherit"},marginRight:{auto:"auto",initial:"initial",inherit:"inherit"},marginTop:{auto:"auto",initial:"initial",inherit:"inherit"},maxHeight:{none:"none",initial:"initial",inherit:"inherit"},maxWidth:{none:"none",initial:"initial",inherit:"inherit"},"@media":{},minHeight:{initial:"initial",inherit:"inherit"},minWidth:{initial:"initial",inherit:"inherit"},navDown:{auto:"auto",initial:"initial",inherit:"inherit"},navIndex:{auto:"auto",initial:"initial",inherit:"inherit"},navLeft:{auto:"auto",initial:"initial",inherit:"inherit"},navRight:{auto:"auto",initial:"initial",inherit:"inherit"},navUp:{auto:"auto",initial:"initial",inherit:"inherit"},opacity:{initial:"initial",inherit:"inherit"},order:{initial:"initial",inherit:"inherit"},outline:{initial:"initial",inherit:"inherit"},outlineColor:{invert:"invert",initial:"initial",inherit:"inherit"},outlineOffset:{initial:"initial",inherit:"inherit"},outlineStyle:{none:"none",hidden:"hidden",dotted:"dotted",dashed:"dashed",solid:"solid",double:"double",groove:"groove",ridge:"ridge",inset:"inset",outset:"outset",initial:"initial",inherit:"inherit"},outlineWidth:{medium:"medium",thin:"thin",thick:"thick",initial:"initial",inherit:"inherit"},overflow:{visible:"visible",hidden:"hidden",scroll:"scroll",auto:"auto",initial:"initial",inherit:"inherit"},overflowX:{visible:"visible",hidden:"hidden",scroll:"scroll",auto:"auto",initial:"initial",inherit:"inherit"},overflowY:{visible:"visible",hidden:"hidden",scroll:"scroll",auto:"auto",initial:"initial",inherit:"inherit"},padding:{initial:"initial",inherit:"inherit"},paddingBottom:{initial:"initial",inherit:"inherit"},paddingLeft:{initial:"initial",inherit:"inherit"},paddingRight:{initial:"initial",inherit:"inherit"},paddingTop:{initial:"initial",inherit:"inherit"},pageBreakAfter:{auto:"auto",always:"always",avoid:"avoid",left:"left",right:"right",initial:"initial",inherit:"inherit"},pageBreakBefore:{auto:"auto",always:"always",avoid:"avoid",left:"left",right:"right",initial:"initial",inherit:"inherit"},pageBreakInside:{auto:"auto",avoid:"avoid",initial:"initial",inherit:"inherit"},perspective:{none:"none",initial:"initial",inherit:"inherit"},perspectiveOrigin:{initial:"initial",inherit:"inherit"},position:{static:"static",absolute:"absolute",fixed:"fixed",relative:"relative",initial:"initial",inherit:"inherit"},quotes:{none:"none",initial:"initial",inherit:"inherit"},resize:{initial:"initial",inherit:"inherit"},right:{auto:"auto",initial:"initial",inherit:"inherit"},tabSize:{initial:"initial",inherit:"inherit"},tableLayout:{auto:"auto",fixed:"fixed",initial:"initial",inherit:"inherit"},textAlign:{left:"left",right:"right",center:"center",justify:"justify",initial:"initial",inherit:"inherit"},textAlignLast:{auto:"auto",left:"left",right:"right",center:"center",justify:"justify",start:"start",end:"end",initial:"initial",inherit:"inherit"},textDecoration:{none:"none",underline:"underline",overline:"overline",lineThrough:"line-through",initial:"initial",inherit:"inherit"},textDecorationColor:{initial:"initial",inherit:"inherit"},textDecorationLine:{none:"none",underline:"underline",overline:"overline",lineThrough:"line-through",initial:"initial",inherit:"inherit"},textDecorationStyle:{solid:"solid",double:"double",dotted:"dotted",dashed:"dashed",wavy:"wavy",initial:"initial",inherit:"inherit"},textIndent:{initial:"initial",inherit:"inherit"},textJustify:{auto:"auto",interWord:"inter-word",interIdeograph:"inter-ideograph",interCluster:"inter-cluster",distribute:"distribute",kashida:"kashida",trim:"trim",none:"none",initial:"initial",inherit:"inherit"},textOverflow:{clip:"clip",ellipsis:"ellipsis",initial:"initial",inherit:"inherit"},textShadow:{none:"none",initial:"initial",inherit:"inherit"},textTransform:{none:"none",capitalize:"capitalize",uppercase:"uppercase",lowercase:"lowercase",initial:"initial",inherit:"inherit"},top:{auto:"auto",initial:"initial",inherit:"inherit"},transform:n({none:"none",initial:"initial",inherit:"inherit"},r),transformOrigin:n({initial:"initial",inherit:"inherit"},r),transformStyle:{flat:"flat","preserve-3d":"preserve-3d",initial:"initial",inherit:"inherit"},transition:{initial:"initial",inherit:"inherit"},transitionDelay:{initial:"initial",inherit:"inherit"},transitionDuration:{initial:"initial",inherit:"inherit"},transitionProperty:{none:"none",all:"all",initial:"initial",inherit:"inherit"},transitionTimingFunction:{ease:"ease",linear:"linear",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",initial:"initial",inherit:"inherit"},unicodeBidi:{normal:"normal",embed:"embed",bidiOverride:"bidi-override",initial:"initial",inherit:"inherit"},verticalAlign:{baseline:"baseline",sub:"sub",super:"super",top:"top",textTop:"text-top",middle:"middle",bottom:"bottom",textBottom:"text-bottom",initial:"initial",inherit:"inherit"},visibility:{visible:"visible",hidden:"hidden",collapse:"collapse",initial:"initial",inherit:"inherit"},whiteSpace:{normal:"normal",nowrap:"nowrap",pre:"pre",preLine:"pre-line",preWrap:"pre-wrap",initial:"initial",inherit:"inherit"},width:{auto:"auto",initial:"initial",inherit:"inherit"},wordBreak:{normal:"normal",breakAll:"break-all",initial:"initial",inherit:"inherit"},wordSpacing:{normal:"normal",initial:"initial",inherit:"inherit"},wordWrap:{normal:"normal",breakWord:"break-word",initial:"initial",inherit:"inherit"},zIndex:{auto:"auto",initial:"initial",inherit:"inherit"}};i.exports=a},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={px:function(i){return i+"px"},cm:function(i){return i+"cm"},mm:function(i){return i+"mm"},in:function(i){return i+"in"},pt:function(i){return i+"pt"},pc:function(i){return i+"pc"},pct:function(i){return i+"%"},em:function(i){return i+"em"},ex:function(i){return i+"ex"},ch:function(i){return i+"ch"},rem:function(i){return i+"rem"},vw:function(i){return i+"vw"},vh:function(i){return i+"vh"},deg:function(i){return i+"deg"},vmin:function(i){return i+"vmin"},vmax:function(i){return i+"vmax"}}},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",convert:function(i,e,t){if("number"!=typeof i||i<-1||i>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||t&&"string"!=typeof t)return null;this.pSBCr||(this.pSBCr=function(i){var e=i.length,t={};if(e>9){if((i=i.split(",")).length<3||i.length>4)return null;t[0]=n(i[0].split("(")[1]),t[1]=n(i[1]),t[2]=n(i[2]),t[3]=i[3]?parseFloat(i[3]):-1}else{if(8==e||6==e||e<4)return null;e<6&&(i="#"+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]+(e>4?i[4]+""+i[4]:"")),i=n(i.slice(1),16),t[0]=i>>16&255,t[1]=i>>8&255,t[2]=255&i,t[3]=-1,9!=e&&5!=e||(t[3]=r(t[2]/255*1e4)/1e4,t[2]=t[1],t[1]=t[0],t[0]=i>>24&255)}return t});var n=parseInt,r=Math.round,a=e.length>9,l=(a="string"==typeof t?t.length>9||"c"==t&&!a:a,i<0),o=(i=l?-1*i:i,t=t&&"c"!=t?t:l?"#000000":"#FFFFFF",this.pSBCr(e)),d=this.pSBCr(t);return o&&d?a?"rgb"+(o[3]>-1||d[3]>-1?"a(":"(")+r((d[0]-o[0])*i+o[0])+","+r((d[1]-o[1])*i+o[1])+","+r((d[2]-o[2])*i+o[2])+(o[3]<0&&d[3]<0?")":","+(o[3]>-1&&d[3]>-1?r(1e4*((d[3]-o[3])*i+o[3]))/1e4:d[3]<0?o[3]:d[3])+")"):"#"+(4294967296+16777216*r((d[0]-o[0])*i+o[0])+65536*r((d[1]-o[1])*i+o[1])+256*r((d[2]-o[2])*i+o[2])+(o[3]>-1&&d[3]>-1?r(255*((d[3]-o[3])*i+o[3])):d[3]>-1?r(255*d[3]):o[3]>-1?r(255*o[3]):255)).toString(16).slice(1,o[3]>-1||d[3]>-1?void 0:-2):null},darken:function(i,e){return this.convert(-e,i)},lighten:function(i,e){return this.convert(e,i)},gradient:function(i,e){return i+"("+e.map(function(i){return Array.isArray(i)?i.join(" "):i}).join(", ")+")"},closestSide:"closest-side at",farthestSide:"farthest-side at",closestCorner:"closest-corner at",farthestCorner:"farthest-corner at",linearGradient:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return this.gradient("linear-gradient",e)},repeatingLinearGradient:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return this.gradient("repeating-linear-gradient",e)},radialGradient:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return this.gradient("radial-gradient",e)},repeatingRadialGradient:function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return this.gradient("repeating-radial-gradient",e)}};e.default=n},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GC_COLLECT_TIME=500},function(i,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(i){"object"==typeof window&&(t=window)}i.exports=t},function(i,e,t){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.constants=e.units=e.color=e.classes=e.MediaQuery=e.Keyframes=e.resetCSS=e.calc=e.CSS=void 0;var n=t(3),r=o(t(2)),a=o(t(1)),l=o(t(0));function o(i){return i&&i.__esModule?i:{default:i}}var d=0,h=["active","checked","disabled","empty","enabled","focus","hover","invalid","link","read-only","required","valid","visited"],s=function(){return"test"===(void 0!==i&&i.process&&i.process.env&&i.process.env.NODE_ENV?i.process.env.NODE_ENV:"production")?d++:Date.now()+parseInt(1e4*Math.random())},u=function(i){return i.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()})},c=function i(e,t){var n="",r="";for(var a in e)if(a.match(/^@media/))n+=i(e[a],a+"{ ."+t);else if(a.match(/^on/)){var l=u(a.replace(/^on[A-Z]/,function(i){return i.substr(-1).toLowerCase()}));n+=i(e[a],t+":"+l)}else if(a.match(/^\./))n+=a+" "+i(e[a],t);else{var o=u(a),d=e[a];if(void 0===d)throw new Error("CSS Error : Value for `"+o+"` is undefined.");"string"!=typeof d&&d.length&&(d=d.join(" ")),"content"===o&&(d='"'+d+'"'),r+=o+":"+d+";"}return t&&t.match(/^@media/)?t+" {"+r+"}} "+n:t?"."+t+" {"+r+"} "+n:r};if("undefined"!=typeof document&&!document.getElementById("_electron_css_sheet")){var f=document.createElement("style");f.id="_electron_css_sheet",document.body.appendChild(f);var p=document.createElement("style");p.id="_electron_css_sheet_keyframes",document.body.appendChild(p),function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.getElementById("_electron_css_sheet"),r=t.sheet?t.sheet:t.styleSheet,a=Math.floor(r.cssRules.length/2);if(a=(a=a<30?30:a)>500?500:a,r.cssRules){e>r.cssRules.length&&(e=0);for(var l=function(i){if(r.cssRules[i]&&r.cssRules[i].selectorText){var e=r.cssRules[i].selectorText.split(".")[1].split(":")[0];0===document.getElementsByClassName(e).length&&r.deleteRule(i)}else r.cssRules[i]&&Array.from(r.cssRules[i].cssRules).forEach(function(e){var t=e.selectorText.split(".")[1].split(":")[0];0===document.getElementsByClassName(t).length&&r.deleteRule(i)})},o=e;o<e+a;o++)l(o);setTimeout(function(){return i(e+a)},n.GC_COLLECT_TIME)}}()}e.CSS=function(i){var e="class"+s(),t="";"string"!=typeof i?(t=c(i,e),document.getElementById("_electron_css_sheet").innerHTML+=t):(t="."+e+" {"+i+"}",document.getElementById("_electron_css_sheet").innerHTML+=t);var n={cache:t+"",toString:function(){var i=document.getElementById("_electron_css_sheet"),n=i.sheet?i.sheet:i.styleSheet;if(Array.from(n.cssRules).some(function(i){return i.selectorText==="."+e}))return e;var r=t.split("}");return r.pop(),r.forEach(function(i){return n.insertRule(i+"}")}),e},inherit:function(){return i}};return h.forEach(function(i){var t=u(i);t=t.replace(/^[a-z]/,function(i){return i.toUpperCase()}),n["on"+t]="."+e+":"+i}),n},e.calc=function(){for(var i=arguments.length,e=Array(i),t=0;t<i;t++)e[t]=arguments[t];return"calc("+e.join(" ")+")"},e.resetCSS=function(){d=0;var i=document.getElementById("_electron_css_sheet"),e=document.createElement("style");e.id="_electron_css_sheet",document.body.replaceChild(e,i)},e.Keyframes=function(i){var e="keys"+s(),t="";if("string"!=typeof i)for(var n in i)t+="\n          "+n+" {\n            "+("string"==typeof i[n]?i[n]:c(i[n]))+"\n          }\n        ";else t=i;return document.getElementById("_electron_css_sheet_keyframes").innerHTML+="\n    @keyframes "+e+" {\n      "+t+"\n    }\n  ",e},e.MediaQuery=function(){for(var i=[],e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r in t){var a=t[r],l="";if(a.arrayValues)i=i.concat(a.arrayValues);else{for(var o in a)l+="("+u(o)+" : "+a[o]+") and ";l=l.substr(0,l.length-4);var d={};d.stringified=l,i.push(d)}}var h=function(){return i.some(function(i){return console.log(i.stringified,matchMedia(i.stringified).matches),matchMedia(i.stringified).matches})};return h.toString=function(){return"@media screen and "+i.map(function(i){return i.stringified}).join(", screen and ")},h.arrayValues=i,h},e.classes=function(i){if(Array.isArray(i))return i.join(" ");var e=[];for(var t in i)i[t]&&e.push(t);return e.join(" ")},e.color=r.default,e.units=a.default,e.constants=l.default}).call(this,t(4))}])});