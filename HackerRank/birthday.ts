function birthday(s: number[], d: number, m: number): number {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      c++;
    }
  }
  return c;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
