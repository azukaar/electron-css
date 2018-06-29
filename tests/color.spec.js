import color from '../src/color';

describe('color', () => {
  it('export colors', () => {
    expect(color.red).toBe('#ff0000');
  });

  it('can darken color', () => {
    expect(color.darken(color.red, 0.1)).toBe('#e60000');
  });

  it('can lighten color', () => {
    expect(color.lighten(color.red, 0.1)).toBe('#ff1a1a');
  });

  it('can transition color', () => {
    expect(color.convert(-0.5,
                         'rgba(20,60,200,0.67423)',
                         'rgba(200,60,20,0.98631)' )
          ).toBe('rgba(110,60,110,0.8303)');
  });
});
