export function removeDuplicates(nums: number[]): number {
  let counter = 0;
  let i = 0;

  let current: number | null = null;

  while (i < nums.length) {
    if (current != nums[i]) {
      current = nums[i];
      nums[counter] = nums[i];
      counter++;
    }

    i++;
  }

  return counter;
}
