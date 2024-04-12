function plusMinus(arr: number[]): void {
  // get length of array
  const arrLen = arr.length;
  // init counters for positive, negative and zeroes
  let pos = 0;
  let neg = 0;
  let zero = 0;
  // loop through array and count positive, negative and zeroes
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  // for each log our their fractions
  console.log((pos / arrLen).toFixed(6));
  console.log((neg / arrLen).toFixed(6));
  console.log((zero / arrLen).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
