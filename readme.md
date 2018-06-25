# Electron-css

Easiest, lightest framework agnostic CSS in JS library. Use with React, Angular or vanilla JS. Compatible with both CSS and JSON syntax.

JSFIddle : https://jsfiddle.net/wrme0pz7/

# React

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

# JQuery

```html
<script src='electron-css/index.js'></script>

<script>
    const myClass = CSS(`color:red;`);
    $(element).append(`
        <div class="${myClass}">Hello World !</div>
    `);
</script>
```
