[![CircleCI](https://img.shields.io/circleci/project/github/azukaar/electron-css.svg)](https://circleci.com/gh/azukaar/electron-css/tree/master) [![Coverage Status](https://img.shields.io/coveralls/github/azukaar/electron-css.svg)](https://coveralls.io/github/azukaar/electron-css?branch=master) [![js-airbnb-style](https://img.shields.io/badge/code%20style-Airbnb-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-airbnb-base)

# Electron-css

[![NPM](https://nodei.co/npm/electron-css.png)](https://npmjs.org/package/electron-css)

Proper, framework agnostic Style in JS library, without any of the fuss of CSS

JSFIddle: https://jsfiddle.net/wrme0pz7/54/

Getting Started:
https://medium.com/@azukaar/stop-using-css-in-js-and-welcome-proper-styling-in-js-with-electron-css-d28536ba3e85
Dynamic Themes: 
https://itnext.io/create-powerful-dynamic-themes-and-layouts-using-electroncss-0-10-4c15654f9e7d

# Style in JS ?

Electron-css is born with this idea that css-in-jss is always doomed to look like CSS mutated in some JSON format. The point here
is to get rid of the assumption that the style is going to be converted to CSS, to think "outside of the stylesheet". One of the
golden rule of the design of Electron-css is : never use any selector (at all). Then you might wonder "Why is it called electron-css
then?" ...well, I'm just bad at naming things.

# Usage

## Installation 

```
npm install electron-css
```

## Basic

Anywhere in your JS, generate some Style using the `CSS` function.

```js
const someStyle = CSS('color: red');
```

```js
const someStyle = CSS({color: 'red'});
```

## Pseudo-elements

```js
const someStyle = CSS({
    onHover: {
        color: 'red'
    }
});
```

## Third party Pseudo-elements

This one is a bit special and illustrate how removing selector shape the library. 

Suppose you have this document :

```html
<div class="foo">
    Some text !
    <div class="bar">
        Hello World !
    </div>
</div>
```

You want to color `.bar` in red, whenever the whole `.foo` block is in hover state.
In classic CSS (well... using a post-processor) you would do : 

```css
.bar {
    color: red;
}

.foo {
    color: red;
    
    &:hover {
        .bar {
            color: blue;
        }
    }
}
```

As you can see, `.bar` 's style is now scattered in two blocks, where `.foo` control some style of `.bar`.
This is bad because you decentralise your CSS, you `.bar` might suddenly become green because something somewhere
edit it. In addition, there might be hundreds of other CSS between the CSS of `.foo` and `.bar` making it even harder to read.

Using Electron-CSS, the redirection are inverted, and all the CSS of `.bar` stays in `.bar` even if it depends on `.foo`. Here the
solution :

```js
const foo = CSS({
    color: 'red'
});

const bar = CSS({
    color: 'red',
    [foo.onHover]: {
        color: 'blue'
    }
});
```

Here is another example 

```javascript
const foo = CSS({
    color: 'red'
});

const bar = CSS({
    color: 'red',
    [foo.asParent]: {
        color:'green'
    },
    [foo.nthChild(1)]: {
        color:'green'
    },
    [foo.onHover.onFocus]: {
        color: 'blue'
    }
});
```

Note: `asParent` is a special pseudo element added to test if the current element is a child of another.

## Dynamic CSS

If you ever used theming in CSS you probably noticed that every JS framework have their own solutions, with various success (mainly because it means using themes in your template), for example as providers for context in React.
Electron CSS comes with a new systeme DynamicCSS. It's a way to declare a patch-able set of rules you can re-use in your code.
Whenever you will overwrite those rules, it will patch your stylesheet accordingly in real time.

You can play with it here : https://jsfiddle.net/wrme0pz7/122/

More here : https://itnext.io/create-powerful-dynamic-themes-and-layouts-using-electroncss-0-10-4c15654f9e7d

```javascript
const Theme = DynamicCSS({
  MainColor: 'red'
});

const foo = CSS({
    color: Theme.MainColor // foo will have a red color
});

// later 

Theme.use(someThirdPartyBlueTheme);
// foo now have a blue color
```

## Animations

Animations are also JS object which also prevent name clashes. Warning : Animations dont get Garbage collected.

```js
const rotateAnimation = ElectronCSS.Keyframes({
    '0%' : {
        transform: 'rotate(0deg)'
    },
    '100%' : {
        transform: 'rotate(360deg)'
    }
});

const someStyle = CSS({
    animation: `${rotateAnimation} 5s infinite`
});
```

## Media Query

Another great example of how `style-in-js` can help your DX, are media queries. Usually, developer have an interface for 
mediaQuery in CSS, and one in JS. Electron-CSS provide both in one.

```js
const mobileOnly = MediaQuery({
    maxWidth: '480px',
    maxHeight: '720px'
})

const someStyle = CSS({
    [mobileOnly]: {
        color: 'red'
    }
});

class MyComp extends React.Component {
    render() {
        return <div className={someStyle}>
            Hello {mobileOnly() ? 'Mobile' : 'Desktop'}
        </div>;
    }
}
```

## More JS Please !

In style-in-JS world, you should avoid as much as possible to use strings, simply because it will force you to do string concatenation and create some monster codes.
By providing helpers, constants, and functions, Electron-css help you to avoid writting codes like :

```js
import {CSS} from 'electron-css';
const color = darken(myColor, 0.1);

CSS({
    border: `${theme.borderColor} ${this.props.large ? 5 : 2} solid`,
    width: `${this.props.width}px`,
    color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
})
```

You can turn this ugly code in :

```js
import {CSS, color, constants, units} from 'electron-css';
const {borderStyle} = constants;
const {px} = units;

CSS({
    border: [theme.borderColor, 
            this.props.large ? 5 : 2,
            borderStyle.solid],
    width: px(this.props.width),
    color: color.darken(myColor, 0.1),
})
```

please read see the details here : 

### Arrays

Use Array to declare rules that are composed of multiple keywords.

```js
import {CSS, color} from 'electron-CSS';

CSS({
  border: ['1px', 'red', 'solid'],
  margin: ['10px', '5px']
});
```

### Classes spreading

Use classes to compose your classes in your template.

```js
import {CSS, color, classes} from 'electron-CSS';

const foo = CSS();
const foo2 = CSS();

<div className={classes({
        [foo],
        [bar] : false,
        something: true
      })}>test</div>

// classes() will return 'class0, something'

<div className={classes([
        [foo],
        [foo2]
      ])}>test</div>

// classes() will return 'class0, class1'
```

### Colors

Use colors constants and darken/lighten helpers to describe your theme.

```js
import {CSS, color} from 'electron-CSS';

const mainColor = color.red;

const myCSS({
    color: mainColor,
    border: ['1px', 'solid', color.darken(mainColor, 0.2)]
});
```

### Gradients

Use colors constants and darken/lighten helpers to describe your theme.

```js
import {CSS, color, pct} from 'electron-CSS';

color.linearGradient([color.red, pct(50)], color.yellow)
// linear-gradient(#ff0000 50%, #ffff00)

color.repeatingRadialGradient([color.closestSide, pct(60), pct(55)], color.red, color.yellow, color.black)
// repeating-radial-gradient(closest-side at 60% 55%, #ff0000, #ffff00, #000000)
```

### Units

Instead of always concataining units, use the units helpers : 

```js
import {CSS, units} from 'electron-CSS';
const {pct, px} = units;

const mainColor = color.red;

const myCSS({
    width: px(1000), // 1000px
    height: pct(50) // 50%
});
```

### Constants

Avoid typo and errors by using provided constant for every CSS rules.

```js
import {CSS, constants} from 'electron-CSS';
const {margin, padding, borderStyle} = constants;

const mainColor = color.red;

const myCSS({
    margin: margin.aut, // margin: aut doesnt exist, and will throw an error in your console !
    padding: padding.inherit
    borderStyle: borderStyle.solid

});
```

## Snapshot tests

As Electron-CSS generate random classnames it might mess up with your tests. Here is how to avoid this.

First, you need to run your test with NODE_ENV properly set to test (you don't have to use cross-env). that will force
Electron to use predictible classnames.

```
cross-env NODE_ENV=test jest
```

Second, you need to reset every CSS beforeEach() test : 

```
beforeEach(() => {
    resetCSS();
});
```

Remember that Electron will manage a style element in your document, so if you do things like `document.body.innerHTML = ` in your tests,
you might want to switch to a more scoped solution as you would remove Electron's stylesheet from the document.

# Inheritance 

Using Electron-js you should avoid adding multiple classes to an object, especially if those classes overwrite each others. Use inheritance instead. The main reason is that you don't want your styling to depend on what order you create your classes.

```html
<style>
.a {
  color: red;
}
.b {
  color: blue;
}
</style>

<div class="a b">
I'm blue dadudidaduda
</div>

<div class="b a">
I'm blue dadudidaduda
</div>
```

This is the proper way to inherit : 

```javascript
const Button = CSS({
    width: pct(100),
    color: color.blue
});

const halfButton = CSS({
    ...Button.inherit(),
    width: pct(50)
});
```

This way you don't have to use both Button and halfButton on your actual HTML element, and the result won't depend on wether or not you registered halfButton after Button, making it less likely to cause issues in your app.

Don't worry about having multiple `width` in your CSS : because object keys are uniques in JS, the resulting styling won't have duplicated rules.

# Anchor

Manually anchor your style anywhere by providing this snippet. You can also change the `document` used.

```html
<style id="generated_css_target_sheet"></style>
<style id="generated_css_target_sheet_keyframes"></style>
```

You can also pass a custom element in

```js
setRootElement(myCustomAnchor);
setDocumentElement(alternativeDocuments);
```

## Give me back my selector

Despite of having a non-selector philosophy, Electron will allow you to use some for some special cases. (like styling user input). Here is how.

```javascript
// will style Button inside of img 
const Button = CSS({
    img: {
        color: color.blue
    }
});

// will style Button inside of img inside of div
const Button = CSS({
    'div img': {
        color: color.blue
    }
});
```

As for classname, what you define inside Button as selector are the parents !!
If you want to have old style left to right selector use the 'next' helper (which actually prepend a '>')

```javascript
// will style img inside of div inside Button 
const Button = CSS({
    [CSS.next('div img')]: {
        color: color.blue
    }
});

// will style img inside of div inside Button 
const Button = CSS({
    '> div img': {
        color: color.blue
    }
});
```

# Examples 

## React

```js
import {CSS} from 'electron-css';

class MyComp extends React.Component {
    render() {
        const myClass = CSS({
            backgroundColor: this.props.color,
            onHover: {
                backgroundColor: 'blue'
            }
        });

        return <div className={myClass}>
            Hello World !
        </div>;
    }
}
```

## Blossom JS

JSFiddle : https://jsfiddle.net/wrme0pz7/33/

```js
import {CSS} from 'electron-css';

const myClass = CSS({
    backgroundColor: this.props.color,
    onHover: {
        backgroundColor: 'blue'
    }
});

class MyComp extends Blossom.Component {
    render() {
      return `<div class="${tester}">
          Hello World !
        </div>`;
    }
}

Blossom.register({
    name: 'e-mycomp',
    element: MyComp
})
```

## JQuery

```html
<script src='electron-css/index.js'></script>

<script>
    const myClass = ElectronCSS.CSS(`color:red;`);
    $(element).append(`
        <div class="${myClass}">Hello World !</div>
    `);
</script>
```
