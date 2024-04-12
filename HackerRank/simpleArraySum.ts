function simpleArraySum(ar: number[]): number {
  let l = 0;
  let r = ar.length - 1;
  let sum = 0;

  while (l <= r) {
    sum += ar[l];
    if (l !== r) {
      sum += ar[r];
    }
    l++;
    r--;
  }

  return sum;
}

console.log(simpleArraySum([1, 2, 3]));
console.log(simpleArraySum([1, 2, 3, 4]));
console.log(simpleArraySum([1, 2, 3, 4, 5]));
