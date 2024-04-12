function miniMaxSum(arr: number[]): void {
  // initialise counts
  let min = 0;
  let max = 0;

  // sort the array
  arr.sort((a, b) => a - b);

  // loop forwards count times and add to min
  for (let i = 0; i <= 3; i++) {
    min += arr[i];
  }

  // loop backwards count times and add to max
  for (let i = arr.length - 1; i >= arr.length - 4; i--) {
    max += arr[i];
  }

  console.log(min.toString() + " " + max.toString());
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
