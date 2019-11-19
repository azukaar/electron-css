import colors from '../src/color';

describe('color', () => {
  it('export colors', () => {
    expect(colors.red).toBe('#ff0000');
  });

  it('can create gradient', () => {
    expect(colors.linearGradient([colors.red, '50%'], colors.yellow)).toBe('linear-gradient(#ff0000 50%, #ffff00)');
    expect(colors.radialGradient(colors.red, colors.yellow)).toBe('radial-gradient(#ff0000, #ffff00)');
    expect(colors.repeatingLinearGradient(colors.red, colors.yellow)).toBe('repeating-linear-gradient(#ff0000, #ffff00)');
    expect(colors.repeatingRadialGradient([colors.closestSide, '60%', '55%'], colors.red, colors.yellow, colors.black))
          .toBe('repeating-radial-gradient(closest-side at 60% 55%, #ff0000, #ffff00, #000000)');
  });

  it('have helpers', () => {
    expect(colors.rgb(0,0,0)).toBe('rgb(0,0,0)');
    expect(colors.rgba(0,0,0,0)).toBe('rgba(0,0,0,0)');
    expect(colors.hex('000000')).toBe('#000000');
    expect(colors.hsl(0,0,0)).toBe('hsl(0,0,0)');
  });

  it('can darken color', () => {
    expect(colors.darken(colors.red, 0.1)).toBe('#e60000');
  });

  it('can lighten color', () => {
    expect(colors.lighten(colors.red, 0.1)).toBe('#ff1a1a');
  });

  it('can transition color', () => {
    expect(colors.convert(-0.5,
                         'rgba(20,60,200,0.67423)',
                         'rgba(200,60,20,0.98631)' )
          ).toBe('rgba(110,60,110,0.8303)');
  });
});
