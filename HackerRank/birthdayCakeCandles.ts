function birthdayCakeCandles(candles: number[]): number {
  // init the first max number we encounter which will be first in candles
  let max = candles[0];
  // init the count to 1
  let count = 1;
  // loop through from second element in candles
  for (let i = 1; i < candles.length; i++) {
    // if we find same max we increment count
    if (candles[i] === max) {
      count++;
    }
    // if we find a number greater than current max we replace it and reset count to 1
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3, 4, 4]));
console.log(birthdayCakeCandles([3, 2, 3, 3, 4, 4]));
console.log(birthdayCakeCandles([3, 4, 1, 3, 4, 4]));
