# Electron-css

Easiest, lightest framework agnostic CSS in JS library. Use with React, Angular or vanilla JS. Compatible with both CSS and JSON syntax.

# React

```js
import CSS from 'electron-css';

class myComp extends React.Component {
    render() {
        const myClass = CSS({
            color: this.props.color,
            ':hover': {
                color: 'blue'
            }
        });
        return <div class={myClass}>Hello World !</div>;
    }
}
```

# JQuery

```html
<script src='electron-css/index.js'>

<script>
    const myClass = CSS(`color:red;`);
    $(element).append(`
        <div class="${myClass}">Hello World !</div>
    `);
</script>
```