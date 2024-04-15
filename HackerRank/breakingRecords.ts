function breakingRecords(scores: number[]): number[] {
  let h = scores[0];
  let hc = 0;
  let l = scores[0];
  let lc = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > h) {
      h = scores[i];
      hc++;
    }

    if (scores[i] < l) {
      l = scores[i];
      lc++;
    }
  }
  return [hc, lc];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
