export function majorityElement(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  interface counterHash {
    [key: string]: number;
  }

  const counter: counterHash = {};
  let i = 0;

  while (i < nums.length) {
    if (!counter[`${nums[i]}`]) {
      counter[`${nums[i]}`] = 1;
    } else {
      counter[`${nums[i]}`] = counter[`${nums[i]}`] + 1;
      if (counter[`${nums[i]}`] > nums.length / 2) {
        return nums[i];
      }
    }

    i++;
  }

  return nums[i];
}
