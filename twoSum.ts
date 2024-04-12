function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const difference = target - number;

    if (map.has(difference)) return [map.get(difference), i];

    map.set(number, i);
  }
}

console.log("test 1", twoSum([2, 3, 11, 7], 9));
console.log("test 2", twoSum([3, 2, 4], 6));
console.log("test 3", twoSum([3, 3], 6));
