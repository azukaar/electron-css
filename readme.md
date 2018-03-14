# Electron-css

Easiest, lightest framework agnostic CSS in JS library. Use with React, Angular or vanilla JS. Compatible with both CSS and JSON syntax.

# React

```
import CSS from 'electron-css';

class myComp extends React.Component {
    render() {
        const myClass = CSS({
            color: 'red'
        });
        return <div class={myClass}>Hello World !</div>;
    }
}
```

# JQuery

```
<script src='electron-css/index.js'>

<script>
    const myClass = CSS(`color:red;`);
    $(element).append(`
        <div class="${myClass}">Hello World !</div>
    `);
</script>
```