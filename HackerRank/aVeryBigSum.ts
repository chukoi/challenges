function aVeryBigSum(ar: number[]): number {
  return ar.reduce((a, b) => a + b, 0);
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
