import { romanToInt } from './main';

describe('13. Roman to Integer', () => {
  it('s = "III"', () => {
    expect(romanToInt('III')).toBe(3);
  });
  it('s = "LVIII"', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });
  it('s = "MCMXCIV"', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
