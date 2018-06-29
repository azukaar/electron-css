import * as CONSTANTS from '../src/config';
CONSTANTS.GC_COLLECT_TIME = 1000;

import {CSS, resetCSS, Keyframes, MediaQuery} from '../src/index';
import color from '../src/color';
import {borderStyle} from '../src/constants';
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

      expect(getSheet().cssRules[1].style.color).toBe('red');
      expect(getSheet().cssRules[2].style.color).toBe('blue');
    });
  })

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
    })

    it('can turn mediaQuery into functions', () => {
      expect(typeof MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      })).toBe('function');
    })

    it('can combine mediaQueries', () => {
      expect(MediaQuery(MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      }), MediaQuery({
        maxWidth: '480px',
        maxHeight: '720px'
      })).toString()).toMatch(/^@media/);
    })
  });
  
  describe('Style management', () => {
    it('create a style element', () => {
      expect(document.getElementById('_electron_css_sheet')).not.toBe(null);
    });

    it('Use predictible IDs on tests', () => {
      const className = CSS({color: 'red'});

      expect(className.toString()).toBe('class0');
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
  })
})