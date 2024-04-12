function sortArray(nums: number[]): number[] {
  const temp = new Array(nums.length);
  mergeSort(nums, temp, 0, nums.length - 1);
  return nums;
}

function mergeSort(
  nums: number[],
  temp: number[],
  left: number,
  right: number,
): void {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(nums, temp, left, mid);
    mergeSort(nums, temp, mid + 1, right);
    merge(nums, temp, left, mid, right);
  }
}

function merge(
  nums: number[],
  temp: number[],
  left: number,
  mid: number,
  right: number,
): void {
  let i = left,
    j = mid + 1,
    k = left;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) temp[k++] = nums[i++];
    else temp[k++] = nums[j++];
  }

  while (i <= mid) temp[k++] = nums[i++];

  while (j <= right) temp[k++] = nums[j++];

  for (let m = left; m <= right; m++) nums[m] = temp[m];
}

console.log("Test 1", sortArray([5, 2, 3, 1]));
console.log("Test 2", sortArray([5, 1, 1, 2, 0, 0]));
