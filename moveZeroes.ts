function moveZeroes(nums: number[]): void {
  let len = nums.length;
  while (len > 0) {
    if (nums[len - 1] === 0) {
      // remove element by index
      const sp: number[] = nums.splice(len - 1, 1);
      // and push this element to end
      nums.push(...sp);
    }
    len--;
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log("Test 1", nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log("Test 2", nums2);
