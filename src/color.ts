export const aliceblue = "#f0f8ff";
export const antiquewhite = "#faebd7";
export const aqua = "#00ffff";
export const aquamarine = "#7fffd4";
export const azure = "#f0ffff";
export const beige = "#f5f5dc";
export const bisque = "#ffe4c4";
export const black = "#000000";
export const blanchedalmond = "#ffebcd";
export const blue = "#0000ff";
export const blueviolet = "#8a2be2";
export const brown = "#a52a2a";
export const burlywood = "#deb887";
export const cadetblue = "#5f9ea0";
export const chartreuse = "#7fff00";
export const chocolate = "#d2691e";
export const coral = "#ff7f50";
export const cornflowerblue = "#6495ed";
export const cornsilk = "#fff8dc";
export const crimson = "#dc143c";
export const cyan = "#00ffff";
export const darkblue = "#00008b";
export const darkcyan = "#008b8b";
export const darkgoldenrod = "#b8860b";
export const darkgray = "#a9a9a9";
export const darkgreen = "#006400";
export const darkgrey = "#a9a9a9";
export const darkkhaki = "#bdb76b";
export const darkmagenta = "#8b008b";
export const darkolivegreen = "#556b2f";
export const darkorange = "#ff8c00";
export const darkorchid = "#9932cc";
export const darkred = "#8b0000";
export const darksalmon = "#e9967a";
export const darkseagreen = "#8fbc8f";
export const darkslateblue = "#483d8b";
export const darkslategray = "#2f4f4f";
export const darkslategrey = "#2f4f4f";
export const darkturquoise = "#00ced1";
export const darkviolet = "#9400d3";
export const deeppink = "#ff1493";
export const deepskyblue = "#00bfff";
export const dimgray = "#696969";
export const dimgrey = "#696969";
export const dodgerblue = "#1e90ff";
export const firebrick = "#b22222";
export const floralwhite = "#fffaf0";
export const forestgreen = "#228b22";
export const fuchsia = "#ff00ff";
export const gainsboro = "#dcdcdc";
export const ghostwhite = "#f8f8ff";
export const gold = "#ffd700";
export const goldenrod = "#daa520";
export const gray = "#808080";
export const green = "#008000";
export const greenyellow = "#adff2f";
export const grey = "#808080";
export const honeydew = "#f0fff0";
export const hotpink = "#ff69b4";
export const indianred = "#cd5c5c";
export const indigo = "#4b0082";
export const ivory = "#fffff0";
export const khaki = "#f0e68c";
export const lavender = "#e6e6fa";
export const lavenderblush = "#fff0f5";
export const lawngreen = "#7cfc00";
export const lemonchiffon = "#fffacd";
export const lightblue = "#add8e6";
export const lightcoral = "#f08080";
export const lightcyan = "#e0ffff";
export const lightgoldenrodyellow = "#fafad2";
export const lightgray = "#d3d3d3";
export const lightgreen = "#90ee90";
export const lightgrey = "#d3d3d3";
export const lightpink = "#ffb6c1";
export const lightsalmon = "#ffa07a";
export const lightseagreen = "#20b2aa";
export const lightskyblue = "#87cefa";
export const lightslategray = "#778899";
export const lightslategrey = "#778899";
export const lightsteelblue = "#b0c4de";
export const lightyellow = "#ffffe0";
export const lime = "#00ff00";
export const limegreen = "#32cd32";
export const linen = "#faf0e6";
export const magenta = "#ff00ff";
export const maroon = "#800000";
export const mediumaquamarine = "#66cdaa";
export const mediumblue = "#0000cd";
export const mediumorchid = "#ba55d3";
export const mediumpurple = "#9370db";
export const mediumseagreen = "#3cb371";
export const mediumslateblue = "#7b68ee";
export const mediumspringgreen = "#00fa9a";
export const mediumturquoise = "#48d1cc";
export const mediumvioletred = "#c71585";
export const midnightblue = "#191970";
export const mintcream = "#f5fffa";
export const mistyrose = "#ffe4e1";
export const moccasin = "#ffe4b5";
export const navajowhite = "#ffdead";
export const navy = "#000080";
export const oldlace = "#fdf5e6";
export const olive = "#808000";
export const olivedrab = "#6b8e23";
export const orange = "#ffa500";
export const orangered = "#ff4500";
export const orchid = "#da70d6";
export const palegoldenrod = "#eee8aa";
export const palegreen = "#98fb98";
export const paleturquoise = "#afeeee";
export const palevioletred = "#db7093";
export const papayawhip = "#ffefd5";
export const peachpuff = "#ffdab9";
export const peru = "#cd853f";
export const pink = "#ffc0cb";
export const plum = "#dda0dd";
export const powderblue = "#b0e0e6";
export const purple = "#800080";
export const rebeccapurple = "#663399";
export const red = "#ff0000";
export const rosybrown = "#bc8f8f";
export const royalblue = "#4169e1";
export const saddlebrown = "#8b4513";
export const salmon = "#fa8072";
export const sandybrown = "#f4a460";
export const seagreen = "#2e8b57";
export const seashell = "#fff5ee";
export const sienna = "#a0522d";
export const silver = "#c0c0c0";
export const skyblue = "#87ceeb";
export const slateblue = "#6a5acd";
export const slategray = "#708090";
export const slategrey = "#708090";
export const snow = "#fffafa";
export const springgreen = "#00ff7f";
export const steelblue = "#4682b4";
export const tan = "#d2b48c";
export const teal = "#008080";
export const thistle = "#d8bfd8";
export const tomato = "#ff6347";
export const turquoise = "#40e0d0";
export const violet = "#ee82ee";
export const wheat = "#f5deb3";
export const white = "#ffffff";
export const whitesmoke = "#f5f5f5";
export const yellow = "#ffff00";
export const yellowgreen = "#9acd32";

export const rgb = (r, g, b) => {
  return `rgb(${r},${g},${b})`;
};

export const rgba = (r, g, b, a) => {
  return `rgba(${r},${g},${b},${a})`;
};

export const hex = (h) => {
  return `#${h}`;
};

export const hsl = (h, s, l) => {
  return `hsl(${h},${s},${l})`;
};

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)

export const convert = function (p, from, to?) {
  if (typeof (p) != "number" || p < -1 || p > 1 || typeof (from) != "string" || (from[0] != 'r' && from[0] != '#') || (to && typeof (to) != "string")) return null; //ErrorCheck
  const pSBCr = (d) => {
    let l = d.length, RGB = {};
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;//ErrorCheck
      RGB[0] = i(d[0].split("(")[1]), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      if (l == 8 || l == 6 || l < 4) return null; //ErrorCheck
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : ""); //3 or 4 digit
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = -1;
      if (l == 9 || l == 5) RGB[3] = r((RGB[2] / 255) * 10000) / 10000, RGB[2] = RGB[1], RGB[1] = RGB[0], RGB[0] = d >> 24 & 255;
    }
    return RGB;
  }
  // @ts-ignore
  var i = parseInt, r = Math.round, h = from.length > 9, h = typeof (to) == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h, b = p < 0, p = b ? p * -1 : p, to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF", f = pSBCr(from), t = pSBCr(to);
  if (!f || !t) return null; //ErrorCheck
  if (h) return "rgb" + (f[3] > -1 || t[3] > -1 ? "a(" : "(") + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");
  else return "#" + (0x100000000 + r((t[0] - f[0]) * p + f[0]) * 0x1000000 + r((t[1] - f[1]) * p + f[1]) * 0x10000 + r((t[2] - f[2]) * p + f[2]) * 0x100 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255)).toString(16).slice(1, f[3] > -1 || t[3] > -1 ? undefined : -2);
};

export const darken = function (color, amt) {
  return convert(-amt, color);
};

export const lighten = function (color, amt) {
  return convert(amt, color);
};

export const gradient = function (type, args) {
  const flatArray = args.map((a) => Array.isArray(a) ? a.join(' ') : a);
  return `${type}(${flatArray.join(', ')})`;
};

export const closestSide = 'closest-side at';
export const farthestSide = 'farthest-side at';
export const closestCorner = 'closest-corner at';
export const farthestCorner = 'farthest-corner at';

export const linearGradient = function (...args) {
  return gradient('linear-gradient', args);
};

export const repeatingLinearGradient = function (...args) {
  return gradient('repeating-linear-gradient', args);
};

export const radialGradient = function (...args) {
  return gradient('radial-gradient', args);
};

export const repeatingRadialGradient = function (...args) {
  return gradient('repeating-radial-gradient', args);
};

const color = {
aliceblue,
antiquewhite,
aqua,
aquamarine,
azure,
beige,
bisque,
black,
blanchedalmond,
blue,
blueviolet,
brown,
burlywood,
cadetblue,
chartreuse,
chocolate,
coral,
cornflowerblue,
cornsilk,
crimson,
cyan,
darkblue,
darkcyan,
darkgoldenrod,
darkgray,
darkgreen,
darkgrey,
darkkhaki,
darkmagenta,
darkolivegreen,
darkorange,
darkorchid,
darkred,
darksalmon,
darkseagreen,
darkslateblue,
darkslategray,
darkslategrey,
darkturquoise,
darkviolet,
deeppink,
deepskyblue,
dimgray,
dimgrey,
dodgerblue,
firebrick,
floralwhite,
forestgreen,
fuchsia,
gainsboro,
ghostwhite,
gold,
goldenrod,
gray,
green,
greenyellow,
grey,
honeydew,
hotpink,
indianred,
indigo,
ivory,
khaki,
lavender,
lavenderblush,
lawngreen,
lemonchiffon,
lightblue,
lightcoral,
lightcyan,
lightgoldenrodyellow,
lightgray,
lightgreen,
lightgrey,
lightpink,
lightsalmon,
lightseagreen,
lightskyblue,
lightslategray,
lightslategrey,
lightsteelblue,
lightyellow,
lime,
limegreen,
linen,
magenta,
maroon,
mediumaquamarine,
mediumblue,
mediumorchid,
mediumpurple,
mediumseagreen,
mediumslateblue,
mediumspringgreen,
mediumturquoise,
mediumvioletred,
midnightblue,
mintcream,
mistyrose,
moccasin,
navajowhite,
navy,
oldlace,
olive,
olivedrab,
orange,
orangered,
orchid,
palegoldenrod,
palegreen,
paleturquoise,
palevioletred,
papayawhip,
peachpuff,
peru,
pink,
plum,
powderblue,
purple,
rebeccapurple,
red,
rosybrown,
royalblue,
saddlebrown,
salmon,
sandybrown,
seagreen,
seashell,
sienna,
silver,
skyblue,
slateblue,
slategray,
slategrey,
snow,
springgreen,
steelblue,
tan,
teal,
thistle,
tomato,
turquoise,
violet,
wheat,
white,
whitesmoke,
yellow,
yellowgreen,
rgb,
rgba,
hex,
hsl,
convert,
darken,
lighten,
gradient,
closestSide,
farthestSide,
closestCorner,
farthestCorner,
linearGradient,
repeatingLinearGradient,
radialGradient,
repeatingRadialGradient,
};

export default color;
