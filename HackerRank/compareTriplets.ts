function compareTriplets(a: number[], b: number[]): number[] {
  // init points for triplets a amd b
  let pa = 0;
  let pb = 0;
  // compare each triplet
  for (let i = 0; i < a.length; ++i) {
    if (a[i] > b[i]) {
      // if a > b add point for a
      pa++;
    } else if (b[i] > a[i]) {
      // if b > a add point for b
      pb++;
    } else {
      // if a = b then no points
    }
  }
  return [pa, pb];
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
