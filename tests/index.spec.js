import * as CONSTANTS from '../src/constants';
CONSTANTS.GC_COLLECT_TIME = 1000;

import CSS from '../src/index';

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
    const element = document.getElementById('_electron_css_sheet');
    
    const stylesheet = document.createElement('style');
    stylesheet.id = '_electron_css_sheet';
    document.body.replaceChild(stylesheet, element);
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
  
  describe('Style management', () => {
    it('create a style element', () => {
      expect(document.getElementById('_electron_css_sheet')).not.toBe(null);
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