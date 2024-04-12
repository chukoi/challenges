function diagonalDifference(arr: number[][]): number {
  // init counters
  let ld = 0;
  let rd = 0;

  // calculate left diagonal sum
  for (let i = 0; i < arr.length; i++) {
    ld += arr[i][i];
  }
  // calculate right diagonal sum
  for (let i = arr.length - 1; i >= 0; i--) {
    rd += arr[i][arr.length - 1 - i];
  }

  // calculate difference
  const diff = ld - rd;

  // return absolute count
  return Math.abs(diff);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
