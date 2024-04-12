function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  return set.size !== nums.length;
}

let nums = [1, 2, 3, 1];

console.log("test 1", containsDuplicate(nums));

nums = [1, 2, 3, 4];

console.log("test 2", containsDuplicate(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log("test 2", containsDuplicate(nums));
