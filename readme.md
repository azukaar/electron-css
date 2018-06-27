[![CircleCI](https://img.shields.io/circleci/project/github/azukaar/electron-css.svg)](https://circleci.com/gh/azukaar/electron-css/tree/master) [![Coverage Status](https://img.shields.io/coveralls/github/azukaar/electron-css.svg)](https://coveralls.io/github/azukaar/electron-css?branch=master) [![js-airbnb-style](https://img.shields.io/badge/code%20style-Airbnb-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-airbnb-base)

# Electron-css

[![NPM](https://nodei.co/npm/electron-css-document.png)](https://npmjs.org/package/electron-css-document)

Easiest framework agnostic Style in JS library. Use with React, Angular or vanilla JS. Compatible with both CSS and JSON syntax.

JSFIddle : https://jsfiddle.net/wrme0pz7/42/

# Style in JS ?

Electron-css is born with this idea that css-in-jss is always doomed to look like CSS mutated in some JSON format. The idea here
is to get rid of the assumption that the style is going to be converted to CSS, to think "outside of the stylesheet". One of the
golden rule of the design of Electron-css is : never use any selector (at all). Then you might wonder "Why is it called electron-css
then?" ...well, I'm just bad at naming things.

# Usage

## Installation 

```
npm install electron-css
```

## Basic

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

Suppose you have this documement :

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

# Examples 

## React

```js
import CSS from 'electron-css';

class MyComp extends React.Component {
    render() {
        const myClass = CSS({
            backgroundColor: this.props.color,
            onHover: {
                backgroundColor: 'blue'
            }
        });

        return <div className={myClass}>Hello World !</div>;
    }
}
```

## Blossom JS

JSFiddle : https://jsfiddle.net/wrme0pz7/33/

```js
import CSS from 'electron-css';

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
    const myClass = CSS(`color:red;`);
    $(element).append(`
        <div class="${myClass}">Hello World !</div>
    `);
</script>
```
