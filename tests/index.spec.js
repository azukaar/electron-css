import * as CONSTANTS from '../src/config';
CONSTANTS.GC_COLLECT_TIME = 1000;

import {CSS, calc, classes, resetCSS, Keyframes, MediaQuery, DynamicCSS} from '../src/index';
import color from '../src/color';
import {borderStyle, transform} from '../src/constants';
import units from '../src/units';

document.body.innerHTML += '<div id="playground"></div>';

function getSheet() {
  const stylesheet = document.getElementById('_electron_css_sheet');
  const sheet = stylesheet.sheet ? stylesheet.sheet : stylesheet.styleSheet;

  return sheet
}

function write(html) {
  document.getElementById('playground').innerHTML += html;
}

describe('', () => {
  beforeEach(() => {
    resetCSS();
    document.getElementById('playground').innerHTML = '';
  });

  describe('Class Creation', () => {
    it('can create a class', () => {
      expect(CSS('').toString()).toMatch(/^class/);
    });

    it('append the CSS to the class', () => {
      CSS('color: red');

      expect(getSheet().cssRules[0].style.color).toBe('red');
    });

    it('convert JSON to CSS', () => {
      CSS({color: 'red'});

      expect(getSheet().cssRules[0].style.color).toBe('red');
    });

    it('Can use constants', () => {
      CSS({
        color: color.red,
        borderStyle: borderStyle.solid
      });

      expect(getSheet().cssRules[0].style.color).toBe(color.red);
    });

    it('Can select parent', () => {
      const foo = CSS({
      });

      const bar = CSS({
        [foo.asParent]: {
          color: color.red,
          borderStyle: borderStyle.solid
        }
      });

      expect(getSheet().cssRules[2].selectorText).toBe('.class0 .class1');
      expect(getSheet().cssRules[2].style.color).toBe(color.red);
    });

    it('Throws on typos', () => {
      expect(() => CSS({
        color: color.rd
      })).toThrow();
    });

    it('Can use units', () => {
      for(let unit in units) {
        if (unit === 'pct') {
          expect(units[unit](1)).toBe('1%');
        } else {
          expect(units[unit](1)).toBe('1' + unit);
        }
      }
    });

    it('Can use arrays', () => {
      CSS({
        border: [color.red, borderStyle.solid, units.px(1)],
      });

      expect(getSheet().cssRules[0].style.border).toBe('#ff0000 solid 1px');
    });

    it('have a calc function', () => {
      expect(calc('1 + 1')).toBe('calc(1 + 1)');
    });

    it('add quotes to content', () => {
      expect(CSS({content: 'hey'}).getStyle()).toBe('.class0 {content:"hey";} ');
    });

    it('have transform functions', () => {
      expect(transform.rotate(units.deg(0), units.deg(90))).toBe('rotate(0deg, 90deg)');
      expect(transform.rotate(units.deg(90))).toBe('rotate(90deg, 0)');
    });

    it('have all transform functions', () => {
      Object.keys(transform).forEach((functionName) => {
        if(typeof transform[functionName] === 'function') {
          expect(transform[functionName](0)).toMatch(functionName)
        }
      })
    });

    it('can inherit', () => {
      const Button = CSS({
        width: units.pct(100),
        color: color.blue
      });

      const halfButton = CSS({
        ...Button.inherit(),
        width: units.pct(50)
      });

      expect(halfButton.getStyle()).toBe('.class1 {width:50%;color:#0000ff;} ');
    })

    it('can remove', () => {
      const Button = CSS({
        color: color.blue
      });

      write(`<div id="test" class="${Button}"></div>`);

      expect(document.getElementById('test').className).toBe('class0');

      Button.remove();

      expect(document.getElementById('test').className).toBe('class1');
    });

    it('can refresh', () => {
      const Button = CSS({
        color: color.blue
      });

      write(`<div id="test" class="${Button}"></div>`);

      expect(document.getElementById('test').className).toBe('class0');

      Button.refresh();

      expect(document.getElementById('test').className).toBe('class1');
      expect(getSheet().cssRules[1].selectorText).toBe('.class1');
      expect(getSheet().cssRules[1].style.color).toBe(color.blue);
    });

    it('convert pseudo-elements', () => {
      CSS({
        color: 'red',
        onHover: {
          color: 'blue'
        }
      });

      expect(getSheet().cssRules[0].style.color).toBe('red');
      expect(getSheet().cssRules[1].style.color).toBe('blue');
    });

    it('link classes pseudo-elements', () => {
      const foo = CSS();
      
      CSS({
        color: 'red',
        [foo.onHover]: {
          color: 'blue'
        }
      });

      expect(foo.onHover.toString()).toBe('.class0:hover');
      expect(getSheet().cssRules[1].style.color).toBe('red');
      expect(getSheet().cssRules[2].style.color).toBe('blue');
      expect(getSheet().cssRules[2].selectorText).toBe('.class0:hover .class1');
    });

    it('link classes pseudo functions', () => {
      const foo = CSS();
      
      CSS({
        color: 'red',
        [foo.nthChild(1)]: {
          color: 'blue'
        }
      });

      expect(foo.nthChild(1).toString()).toBe('.class0:nth-child(1)');
      expect(getSheet().cssRules[1].style.color).toBe('red');
      expect(getSheet().cssRules[2].style.color).toBe('blue');
      expect(getSheet().cssRules[2].selectorText).toBe('.class0:nth-child(1) .class1');
    });

    it('chains classes link pseudo-elements', () => {
      const foo = CSS();
      
      CSS({
        color: 'red',
        [foo.onHover.onFocus]: {
          color: 'blue'
        }
      });

      expect(foo.onHover.onFocus.toString()).toBe('.class0:hover:focus');
      expect(getSheet().cssRules[1].style.color).toBe('red');
      expect(getSheet().cssRules[2].style.color).toBe('blue');
      expect(getSheet().cssRules[2].selectorText).toBe('.class0:hover:focus .class1');
    });
  });

  describe('Keyframes Creation', () => {
    it('can create a keyframes', () => {
      expect(Keyframes('').toString()).toMatch(/^keys/);
    });

    it('can create a keyframes from JSON', () => {
      expect(Keyframes({
        from: {
          color: 'red'
        },
        to : {
          color: 'blue'
        }
      }).toString()).toMatch(/^keys/);
    });
  });

  describe('MediaQuery Creation', () => {
    it('can create a mediaQuery', () => {
      expect(MediaQuery().toString()).toMatch(/^@media/);
    });

    it('can create a mediaQuery from JSON', () => {
      expect(MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      }).toString()).toMatch(/^@media/);
    });

    it('can turn mediaQuery into functions', () => {
      expect(typeof MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      })).toBe('function');
    });

    it('can combine mediaQueries', () => {
      expect(MediaQuery(MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      }), MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      })).toString()).toMatch(/^@media/);
    });

    it('can use mediaQuery', () => {
      const mq = MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      });

      const foo = CSS({
        [mq]: {
          color: 'red'
        }
      });

      expect(foo.getStyle()).toBe('.class0 {} @media screen and (max-width : 480px) and (max-height : 720px) { .class0 {color:red;}} ');
    })
  });
  
  describe('Style management', () => {
    it('create a style element', () => {
      expect(document.getElementById('_electron_css_sheet')).not.toBe(null);
    });

    it('allow spreading classes', () => {
      const foo = CSS();

      expect(classes({
        foo,
        bar : false,
        something: true
      })).toBe('foo something');
    });

    it('allow spreading classes array', () => {
      const foo = CSS();
      const foo2 = CSS();

      expect(classes([
        foo,
        foo2
      ])).toBe('class0 class1');
    });

    it('Use predictible IDs on tests', () => {
      expect(CSS().toString()).toBe('class0');
      expect(CSS().toString()).toBe('class1');
      expect(CSS().toString()).toBe('class2');
    });

    it('garbage collect unused classes', () => {
      const foo = CSS({
        color: 'red'
      }).toString();

      return new Promise((resolve) => {
        setTimeout(() => {
          expect(getSheet().cssRules.length).toBe(0);
          resolve();
        }, 1001);
      })
    });

    it('keeps used classes', () => {
      const foo = CSS({
        color: 'red'
      });

      write('<div class="' + foo + '"></div>');

      return new Promise((resolve) => {
        setTimeout(() => {
          expect(getSheet().cssRules.length).toBe(1);
          resolve();
        }, 1001);
      })
    });

    it('removed class can restore themselves', () => {
      const foo = CSS({
        color: 'red'
      });

      return new Promise((resolve) => {
        setTimeout(() => {
          expect(getSheet().cssRules.length).toBe(0);
          foo.toString();
          expect(getSheet().cssRules.length).toBe(1);
          resolve();
        }, 1001);
      })
    });
  });
  
  describe('Theme mangement', () => {
    it('create a DynamicCSS', () => {
      const myTheme = DynamicCSS({
        mainColor: 'blue'
      });

      expect(myTheme.mainColor).toBe('@@0@@mainColor');
      expect(myTheme.realValues).toEqual({
        mainColor: 'blue'
      });
    });

    it('can use a DynamicCSS', () => {
      const Theme = DynamicCSS({
        mainColor: 'blue'
      });

      const foo = CSS({
        color: Theme.mainColor,
      });

      expect(getSheet().cssRules[0].style.color).toBe('blue');
    });

    it('can use multiple DynamicCSS', () => {
      const Theme = DynamicCSS({
        mainColor: 'blue'
      });
      const Layout = DynamicCSS({
        mainWidth: '50px'
      });

      const foo = CSS({
        color: Theme.mainColor,
        width: Layout.mainWidth
      });

      expect(getSheet().cssRules[0].style.color).toBe('blue');
      expect(getSheet().cssRules[0].style.width).toBe('50px');
    });

    it('refresh DynamicCSS values', () => {
      const Theme = DynamicCSS({
        mainColor: 'blue'
      });

      const foo = CSS({
        color: Theme.mainColor,
      });

      write(`<div id="test" class="${foo}"></div>`);

      expect(getSheet().cssRules[0].style.color).toBe('blue');

      Theme.inject({
        mainColor: 'red'
      });

      expect(getSheet().cssRules[1].style.color).toBe('red');
    });
  });
});