import { removeDuplicates } from './main';

describe('remove dupes', () => {
  it('nums = [1,1,2]', () => {
    let nums = [1, 1, 2];

    expect(removeDuplicates(nums)).toStrictEqual(2);

    expect([nums[0], nums[1]]).toStrictEqual([1, 2]);
  });

  it('nums = [0,0,1,1,1,2,2,3,3,4]', () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    expect(removeDuplicates(nums)).toStrictEqual(5);

    expect([nums[0], nums[1], nums[2], nums[3], nums[4]]).toStrictEqual([
      0, 1, 2, 3, 4,
    ]);
  });
});
