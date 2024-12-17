import { maxProfit } from './main';

describe('121. Best Time to Buy and Sell Stock', () => {
  it('prices = [7,1,5,3,6,4]', () => {
    let prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  it(' prices = [7,6,4,3,1]', () => {
    let prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});
