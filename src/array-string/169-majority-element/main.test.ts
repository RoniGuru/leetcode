import { majorityElement } from './main';

describe('majority element', () => {
  it('nums = [3,2,3]', () => {
    let nums = [3, 2, 3];
    expect(majorityElement(nums)).toBe(3);
  });
  it('nums = [2,2,1,1,1,2,2]', () => {
    let nums = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums)).toBe(2);
  });
});
