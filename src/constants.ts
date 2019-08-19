const transformFunction = {
  none: 'none',
  matrix: (...content) => `matrix(${content.join(',')})`,
  matrix3d: (...content) => `matrix3d(${content.join(',')})`,
  translate: (x, y = 0) => `translate(${x}, ${y})`,
  translate3d: (x, y = 0, z = 0) => `translate3d(${x}, ${y}, ${z})`,
  translateX: (x) => `translateX(${x})`,
  translateY: (y) => `translateY(${y})`,
  translateZ: (z) => `translateZ(${z})`,
  scale: (x, y = 0) => `scale(${x}, ${y})`,
  scale3d: (x, y = 0, z = 0) => `scale3d(${x}, ${y}, ${z})`,
  scaleX: (x) => `scaleX(${x})`,
  scaleY: (y) => `scaleY(${y})`,
  scaleZ: (z) => `scaleZ(${z})`,
  rotate: (x, y = 0) => `rotate(${x}, ${y})`,
  rotate3d: (x, y = 0, z = 0) => `rotate3d(${x}, ${y}, ${z})`,
  rotateX: (x) => `rotateX(${x})`,
  rotateY: (y) => `rotateY(${y})`,
  rotateZ: (z) => `rotateZ(${z})`,
  skew: (x, y = 0) => `skew(${x}, ${y})`,
  skewY: (y) => `skewY(${y})`,
  skewZ: (z) => `skewZ(${z})`,
  perspective: (n) => `perspective(${n})`,
}

export const alignContent = { "stretch": "stretch", "center": "center", "flexStart": "flex-start", "flexEnd": "flex-end", "spaceBetween": "space-between", "spaceAround": "space-around", "initial": "initial", "inherit": "inherit" };
export const alignItems = { "stretch": "stretch", "center": "center", "flexStart": "flex-start", "flexEnd": "flex-end", "baseline": "baseline", "initial": "initial", "inherit": "inherit" };
export const alignSelf = { "auto": "auto", "stretch": "stretch", "center": "center", "flexStart": "flex-start", "flexEnd": "flex-end", "baseline": "baseline", "initial": "initial", "inherit": "inherit" };
export const animation = { "initial": "initial", "inherit": "inherit" };
export const animationDelay = { "initial": "initial", "inherit": "inherit" };
export const animationDirection = { "normal": "normal", "reverse": "reverse", "alternate": "alternate", "alternateReverse": "alternate-reverse", "initial": "initial", "inherit": "inherit" };
export const animationDuration = { "initial": "initial", "inherit": "inherit" };
export const animationFillMode = { "none": "none", "forwards": "forwards", "backwards": "backwards", "both": "both", "initial": "initial", "inherit": "inherit" };
export const animationIterationCount = { "infinite": "infinite", "initial": "initial", "inherit": "inherit" };
export const animationName = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const animationPlayState = { "paused": "paused", "running": "running", "initial": "initial", "inherit": "inherit" };
export const backfaceVisibility = { "visible": "visible", "hidden": "hidden", "initial": "initial", "inherit": "inherit" };
export const background = { "initial": "initial", "inherit": "inherit" };
export const backgroundAttachment = { "scroll": "scroll", "fixed": "fixed", "local": "local", "initial": "initial", "inherit": "inherit" };
export const backgroundClip = { "borderBox": "border-box", "paddingBox": "padding-box", "contentBox": "content-box", "initial": "initial", "inherit": "inherit" };
export const backgroundColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const backgroundImage = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const backgroundOrigin = { "paddingBox": "padding-box", "borderBox": "border-box", "contentBox": "content-box", "initial": "initial", "inherit": "inherit" };
export const backgroundPosition = { "initial": "initial", "inherit": "inherit" };
export const backgroundRepeat = { "repeat": "repeat", "repeatX": "repeat-x", "repeatY": "repeat-y", "noRepeat": "no-repeat", "initial": "initial", "inherit": "inherit" };
export const backgroundSize = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const border = { "initial": "initial", "inherit": "inherit" };
export const borderBottom = { "initial": "initial", "inherit": "inherit" };
export const borderBottomColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const borderBottomLeftRadius = { "initial": "initial", "inherit": "inherit" };
export const borderBottomRightRadius = { "initial": "initial", "inherit": "inherit" };
export const borderBottomStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const borderBottomWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const borderCollapse = { "separate": "separate", "collapse": "collapse", "initial": "initial", "inherit": "inherit" };
export const borderColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const borderImage = { "initial": "initial", "inherit": "inherit" };
export const borderImageOutset = { "initial": "initial", "inherit": "inherit" };
export const borderImageRepeat = { "space": "space", "initial": "initial", "inherit": "inherit" };
export const borderImageSlice = { "initial": "initial", "inherit": "inherit" };
export const borderImageSource = { "initial": "initial", "inherit": "inherit" };
export const borderImageWidth = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const borderLeft = { "initial": "initial", "inherit": "inherit" };
export const borderLeftColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const borderLeftStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const borderLeftWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const borderRadius = { "initial": "initial", "inherit": "inherit" };
export const borderRight = { "initial": "initial", "inherit": "inherit" };
export const borderRightColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const borderRightStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const borderRightWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const borderSpacing = { "initial": "initial", "inherit": "inherit" };
export const borderStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const borderTop = { "initial": "initial", "inherit": "inherit" };
export const borderTopColor = { "transparent": "transparent", "initial": "initial", "inherit": "inherit" };
export const borderTopLeftRadius = { "initial": "initial", "inherit": "inherit" };
export const borderTopRightRadius = { "initial": "initial", "inherit": "inherit" };
export const borderTopStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const borderTopWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const borderWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const bottom = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const boxShadow = { "none": "none", "inset": "inset", "initial": "initial", "inherit": "inherit" };
export const boxSizing = { "initial": "initial", "inherit": "inherit", "borderBox": "border-box", "contentBox": "content-box" };
export const captionSide = { "top": "top", "bottom": "bottom", "initial": "initial", "inherit": "inherit" };
export const clear = { "none": "none", "left": "left", "right": "right", "both": "both", "initial": "initial", "inherit": "inherit" };
export const clip = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const color = { "initial": "initial", "inherit": "inherit" };
export const columnCount = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const columnFill = { "balance": "balance", "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const columnGap = { "normal": "normal", "initial": "initial", "inherit": "inherit" };
export const columnRule = { "initial": "initial", "inherit": "inherit" };
export const columnRuleColor = { "initial": "initial", "inherit": "inherit" };
export const columnRuleStyle = { "initial": "initial", "inherit": "inherit" };
export const columnRuleWidth = { "initial": "initial", "inherit": "inherit" };
export const columnSpan = { "1": "1", "all": "all", "initial": "initial", "inherit": "inherit" };
export const columnWidth = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const columns = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const content = { "normal": "normal", "none": "none", "counter": "counter", "openQuote": "open-quote", "closeQuote": "close-quote", "noOpenQuote": "no-open-quote", "noCloseQuote": "no-close-quote", "initial": "initial", "inherit": "inherit" };
export const counterIncrement = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const counterReset = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const cursor = { "alias": "alias", "allScroll": "all-scroll", "auto": "auto", "cell": "cell", "contextMenu": "context-menu", "colResize": "col-resize", "copy": "copy", "crosshair": "crosshair", "default": "default", "eResize": "e-resize", "ewResize": "ew-resize", "grab": "grab", "grabbing": "grabbing", "help": "help", "move": "move", "nResize": "n-resize", "neResize": "ne-resize", "neswResize": "nesw-resize", "nsResize": "ns-resize", "nwResize": "nw-resize", "nwseResize": "nwse-resize", "noDrop": "no-drop", "none": "none", "notAllowed": "not-allowed", "pointer": "pointer", "progress": "progress", "rowResize": "row-resize", "sResize": "s-resize", "seResize": "se-resize", "swResize": "sw-resize", "text": "text", "verticalText": "vertical-text", "wResize": "w-resize", "wait": "wait", "zoomIn": "zoom-in", "zoomOut": "zoom-out", "initial": "initial", "inherit": "inherit" };
export const direction = { "ltr": "ltr", "rtl": "rtl", "initial": "initial", "inherit": "inherit" };
export const display = { "inline": "inline", "block": "block", "flex": "flex", "inlineBlock": "inline-block", "inlineFlex": "inline-flex", "inlineTable": "inline-table", "listItem": "list-item", "runIn": "run-in", "table": "table", "tableCaption": "table-caption", "tableHeaderGroup": "table-header-group", "tableFooterGroup": "table-footer-group", "tableRowGroup": "table-row-group", "tableCell": "table-cell", "tableColumn": "table-column", "tableRow": "table-row", "none": "none", "initial": "initial", "inherit": "inherit" };
export const emptyCells = { "show": "show", "hide": "hide", "initial": "initial", "inherit": "inherit" };
export const flex = { "auto": "auto", "initial": "initial", "none": "none", "inherit": "inherit" };
export const flexBasis = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const flexDirection = { "row": "row", "rowReverse": "row-reverse", "column": "column", "columnReverse": "column-reverse", "initial": "initial", "inherit": "inherit" };
export const flexFlow = { "initial": "initial", "inherit": "inherit" };
export const flexGrow = { "initial": "initial", "inherit": "inherit" };
export const flexShrink = { "initial": "initial", "inherit": "inherit" };
export const flexWrap = { "nowrap": "nowrap", "wrap": "wrap", "wrapReverse": "wrap-reverse", "initial": "initial", "inherit": "inherit" };
export const float = { "none": "none", "left": "left", "right": "right", "initial": "initial", "inherit": "inherit" };
export const font = { "caption": "caption", "icon": "icon", "menu": "menu", "messageBox": "message-box", "smallCaption": "small-caption", "statusBar": "status-bar", "initial": "initial", "inherit": "inherit" };
export const fontFamily = { "initial": "initial", "inherit": "inherit" };
export const fontSize = { "medium": "medium", "xxSmall": "xx-small", "xSmall": "x-small", "small": "small", "large": "large", "xLarge": "x-large", "xxLarge": "xx-large", "smaller": "smaller", "larger": "larger", "initial": "initial", "inherit": "inherit" };
export const fontSizeAdjust = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const fontStretch = { "ultraCondensed": "ultra-condensed", "extraCondensed": "extra-condensed", "condensed": "condensed", "semiCondensed": "semi-condensed", "normal": "normal", "semiExpanded": "semi-expanded", "expanded": "expanded", "extraExpanded": "extra-expanded", "ultraExpanded": "ultra-expanded", "initial": "initial", "inherit": "inherit" };
export const fontStyle = { "normal": "normal", "italic": "italic", "oblique": "oblique", "initial": "initial", "inherit": "inherit" };
export const fontVariant = { "normal": "normal", "smallCaps": "small-caps", "initial": "initial", "inherit": "inherit" };
export const fontWeight = { "normal": "normal", "bold": "bold", "bolder": "bolder", "lighter": "lighter", "initial": "initial", "inherit": "inherit" };
export const hangingPunctuation = { "none": "none", "first": "first", "last": "last", "allowEnd": "allow-end", "forceEnd": "force-end", "initial": "initial", "inherit": "inherit" };
export const height = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const justifyContent = { "flexStart": "flex-start", "flexEnd": "flex-end", "center": "center", "spaceBetween": "space-between", "spaceAround": "space-around", "initial": "initial", "inherit": "inherit" };
export const left = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const letterSpacing = { "normal": "normal", "initial": "initial", "inherit": "inherit" };
export const lineHeight = { "normal": "normal", "initial": "initial", "inherit": "inherit" };
export const listStyle = { "initial": "initial", "inherit": "inherit" };
export const listStyleImage = { "none": "none", "url": "url", "initial": "initial", "inherit": "inherit" };
export const listStylePosition = { "inside": "inside", "outside": "outside", "initial": "initial", "inherit": "inherit" };
export const listStyleType = { "disc": "disc", "armenian": "armenian", "circle": "circle", "cjkIdeographic": "cjk-ideographic", "decimal": "decimal", "decimalLeadingZero": "decimal-leading-zero", "georgian": "georgian", "hebrew": "hebrew", "hiragana": "hiragana", "hiraganaIroha": "hiragana-iroha", "katakana": "katakana", "katakanaIroha": "katakana-iroha", "lowerAlpha": "lower-alpha", "lowerGreek": "lower-greek", "lowerLatin": "lower-latin", "lowerRoman": "lower-roman", "none": "none", "square": "square", "upperAlpha": "upper-alpha", "upperLatin": "upper-latin", "upperRoman": "upper-roman", "initial": "initial", "inherit": "inherit" };
export const margin = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const marginBottom = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const marginLeft = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const marginRight = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const marginTop = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const maxHeight = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const maxWidth = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const minHeight = { "initial": "initial", "inherit": "inherit" };
export const minWidth = { "initial": "initial", "inherit": "inherit" };
export const navDown = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const navIndex = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const navLeft = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const navRight = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const navUp = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const opacity = { "initial": "initial", "inherit": "inherit" };
export const order = { "initial": "initial", "inherit": "inherit" };
export const outline = { "initial": "initial", "inherit": "inherit" };
export const outlineColor = { "invert": "invert", "initial": "initial", "inherit": "inherit" };
export const outlineOffset = { "initial": "initial", "inherit": "inherit" };
export const outlineStyle = { "none": "none", "hidden": "hidden", "dotted": "dotted", "dashed": "dashed", "solid": "solid", "double": "double", "groove": "groove", "ridge": "ridge", "inset": "inset", "outset": "outset", "initial": "initial", "inherit": "inherit" };
export const outlineWidth = { "medium": "medium", "thin": "thin", "thick": "thick", "initial": "initial", "inherit": "inherit" };
export const overflow = { "visible": "visible", "hidden": "hidden", "scroll": "scroll", "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const overflowX = { "visible": "visible", "hidden": "hidden", "scroll": "scroll", "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const overflowY = { "visible": "visible", "hidden": "hidden", "scroll": "scroll", "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const padding = { "initial": "initial", "inherit": "inherit" };
export const paddingBottom = { "initial": "initial", "inherit": "inherit" };
export const paddingLeft = { "initial": "initial", "inherit": "inherit" };
export const paddingRight = { "initial": "initial", "inherit": "inherit" };
export const paddingTop = { "initial": "initial", "inherit": "inherit" };
export const pageBreakAfter = { "auto": "auto", "always": "always", "avoid": "avoid", "left": "left", "right": "right", "initial": "initial", "inherit": "inherit" };
export const pageBreakBefore = { "auto": "auto", "always": "always", "avoid": "avoid", "left": "left", "right": "right", "initial": "initial", "inherit": "inherit" };
export const pageBreakInside = { "auto": "auto", "avoid": "avoid", "initial": "initial", "inherit": "inherit" };
export const perspective = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const perspectiveOrigin = { "initial": "initial", "inherit": "inherit" };
export const position = { "static": "static", "absolute": "absolute", "fixed": "fixed", "relative": "relative", "initial": "initial", "inherit": "inherit" };
export const quotes = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const resize = { "initial": "initial", "inherit": "inherit" };
export const right = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const tabSize = { "initial": "initial", "inherit": "inherit" };
export const tableLayout = { "auto": "auto", "fixed": "fixed", "initial": "initial", "inherit": "inherit" };
export const textAlign = { "left": "left", "right": "right", "center": "center", "justify": "justify", "initial": "initial", "inherit": "inherit" };
export const textAlignLast = { "auto": "auto", "left": "left", "right": "right", "center": "center", "justify": "justify", "start": "start", "end": "end", "initial": "initial", "inherit": "inherit" };
export const textDecoration = { "none": "none", "underline": "underline", "overline": "overline", "lineThrough": "line-through", "initial": "initial", "inherit": "inherit" };
export const textDecorationColor = { "initial": "initial", "inherit": "inherit" };
export const textDecorationLine = { "none": "none", "underline": "underline", "overline": "overline", "lineThrough": "line-through", "initial": "initial", "inherit": "inherit" };
export const textDecorationStyle = { "solid": "solid", "double": "double", "dotted": "dotted", "dashed": "dashed", "wavy": "wavy", "initial": "initial", "inherit": "inherit" };
export const textIndent = { "initial": "initial", "inherit": "inherit" };
export const textJustify = { "auto": "auto", "interWord": "inter-word", "interIdeograph": "inter-ideograph", "interCluster": "inter-cluster", "distribute": "distribute", "kashida": "kashida", "trim": "trim", "none": "none", "initial": "initial", "inherit": "inherit" };
export const textOverflow = { "clip": "clip", "ellipsis": "ellipsis", "initial": "initial", "inherit": "inherit" };
export const textShadow = { "none": "none", "initial": "initial", "inherit": "inherit" };
export const textTransform = { "none": "none", "capitalize": "capitalize", "uppercase": "uppercase", "lowercase": "lowercase", "initial": "initial", "inherit": "inherit" };
export const top = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const transform = { "none": "none", "initial": "initial", "inherit": "inherit", ...transformFunction };
export const transformOrigin = { "initial": "initial", "inherit": "inherit", "none": "none", ...transformFunction };
export const transformStyle = { "flat": "flat", "preserve-3d": "preserve-3d", "initial": "initial", "inherit": "inherit" };
export const transition = { "initial": "initial", "inherit": "inherit" };
export const transitionDelay = { "initial": "initial", "inherit": "inherit" };
export const transitionDuration = { "initial": "initial", "inherit": "inherit" };
export const transitionProperty = { "none": "none", "all": "all", "initial": "initial", "inherit": "inherit" };
export const transitionTimingFunction = { "ease": "ease", "linear": "linear", "easeIn": "ease-in", "easeOut": "ease-out", "easeInOut": "ease-in-out", "initial": "initial", "inherit": "inherit" };
export const unicodeBidi = { "normal": "normal", "embed": "embed", "bidiOverride": "bidi-override", "initial": "initial", "inherit": "inherit" };
export const verticalAlign = { "baseline": "baseline", "sub": "sub", "super": "super", "top": "top", "textTop": "text-top", "middle": "middle", "bottom": "bottom", "textBottom": "text-bottom", "initial": "initial", "inherit": "inherit" };
export const visibility = { "visible": "visible", "hidden": "hidden", "collapse": "collapse", "initial": "initial", "inherit": "inherit" };
export const whiteSpace = { "normal": "normal", "nowrap": "nowrap", "pre": "pre", "preLine": "pre-line", "preWrap": "pre-wrap", "initial": "initial", "inherit": "inherit" };
export const width = { "auto": "auto", "initial": "initial", "inherit": "inherit" };
export const wordBreak = { "normal": "normal", "breakAll": "break-all", "initial": "initial", "inherit": "inherit" };
export const wordSpacing = { "normal": "normal", "initial": "initial", "inherit": "inherit" };
export const wordWrap = { "normal": "normal", "breakWord": "break-word", "initial": "initial", "inherit": "inherit" };
export const zIndex = { "auto": "auto", "initial": "initial", "inherit": "inherit" };

const constants = {
  alignContent,
  alignItems,
  alignSelf,
  animation,
  animationDelay,
  animationDirection,
  animationDuration,
  animationFillMode,
  animationIterationCount,
  animationName,
  animationPlayState,
  backfaceVisibility,
  background,
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderCollapse,
  borderColor,
  borderImage,
  borderImageOutset,
  borderImageRepeat,
  borderImageSlice,
  borderImageSource,
  borderImageWidth,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderSpacing,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  bottom,
  boxShadow,
  boxSizing,
  captionSide,
  clear,
  clip,
  color,
  columnCount,
  columnFill,
  columnGap,
  columnRule,
  columnRuleColor,
  columnRuleStyle,
  columnRuleWidth,
  columnSpan,
  columnWidth,
  columns,
  content,
  counterIncrement,
  counterReset,
  cursor,
  direction,
  display,
  emptyCells,
  flex,
  flexBasis,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  float,
  font,
  fontFamily,
  fontSize,
  fontSizeAdjust,
  fontStretch,
  fontStyle,
  fontVariant,
  fontWeight,
  hangingPunctuation,
  height,
  justifyContent,
  left,
  letterSpacing,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  navDown,
  navIndex,
  navLeft,
  navRight,
  navUp,
  opacity,
  order,
  outline,
  outlineColor,
  outlineOffset,
  outlineStyle,
  outlineWidth,
  overflow,
  overflowX,
  overflowY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  pageBreakAfter,
  pageBreakBefore,
  pageBreakInside,
  perspective,
  perspectiveOrigin,
  position,
  quotes,
  resize,
  right,
  tabSize,
  tableLayout,
  textAlign,
  textAlignLast,
  textDecoration,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textIndent,
  textJustify,
  textOverflow,
  textShadow,
  textTransform,
  top,
  transform,
  transformOrigin,
  transformStyle,
  transition,
  transitionDelay,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  unicodeBidi,
  verticalAlign,
  visibility,
  whiteSpace,
  width,
  wordBreak,
  wordSpacing,
  wordWrap,
  zIndex,
}

export default constants;
