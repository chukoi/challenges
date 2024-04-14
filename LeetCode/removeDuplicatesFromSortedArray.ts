/**
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 **/
function removeDuplicatesFromSortedArray(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

console.log(removeDuplicatesFromSortedArray([1, 1, 2]));
console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
