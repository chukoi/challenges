function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let ca = 0;
  let cb = 0;
  for (let i = 0; i < apples.length; i++) {
    const ad = a + apples[i];
    if (ad >= s && ad <= t) {
      ca++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    const cd = b + oranges[i];
    if (cd >= s && cd <= t) {
      cb++;
    }
  }
  console.log(ca);
  console.log(cb);
}

countApplesAndOranges(7, 11, 5, 15, [-1, 2, 1], [5, -6]);
