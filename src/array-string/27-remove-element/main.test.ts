import { removeElement } from './main';

describe('remove element', () => {
  it('nums = [3,2,2,3], val = 3', () => {
    let nums = [3, 2, 2, 3];
    let val = 3;
    expect(removeElement(nums, val)).toStrictEqual(2);
    expect([nums[0], nums[1]]).toStrictEqual([2, 2]);
  });

  it('nums = [3,2,2,3], val = 3', () => {
    let nums = [0, 1, 2, 2, 3, 0, 4, 2];
    let val = 2;
    expect(removeElement(nums, val)).toStrictEqual(5);
    expect([nums[0], nums[1], nums[2], nums[3], nums[4]]).toEqual(
      expect.arrayContaining([0, 1, 4, 0, 3])
    );
  });
});
