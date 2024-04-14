/**
 * nums = [3,2,2,3], val = 3
 * nums = [0,1,2,2,3,0,4,2], val = 2
 **/
function removeElement(nums: (number | string)[], val: number): number {
  let removed = 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = -1;
      removed++;
    }
  }
  nums.sort((a: any, b: any) => a - b);
  nums = nums.splice(removed, nums.length);
  k = nums.length;
  for (let i = 0; i < removed; i++) {
    nums.push("_");
  }
  return k;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
