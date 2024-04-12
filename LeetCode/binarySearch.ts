function binarySearch(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1,
    m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if ((nums[m] === target)) return m;
    else if (nums[m] < target) l = m + 1;
    else r = m - 1;
  }

  return -1;
}

console.log("Test 1", binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log("Test 2", binarySearch([-1, 0, 3, 5, 9, 12], 2));
