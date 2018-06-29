import color from '../src/color';

describe('color', () => {
  it('export colors', () => {
    expect(color.red).toBe('#ff0000');
  });

  it('can create gradient', () => {
    expect(color.linearGradient([color.red, '50%'], color.yellow)).toBe('linear-gradient(#ff0000 50%, #ffff00)');
    expect(color.radialGradient(color.red, color.yellow)).toBe('radial-gradient(#ff0000, #ffff00)');
    expect(color.repeatingLinearGradient(color.red, color.yellow)).toBe('repeating-linear-gradient(#ff0000, #ffff00)');
    expect(color.repeatingRadialGradient([color.closestSide, '60%', '55%'], color.red, color.yellow, color.black))
          .toBe('repeating-radial-gradient(closest-side at 60% 55%, #ff0000, #ffff00, #000000)');
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
