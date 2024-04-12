function reverseString(str: string): string {
  let s = str.split("");

  let l = 0,
    r = str.length - 1,
    t;

  while (l <= r) {
    t = s[l];
    s[l] = s[r];
    s[r] = t;
    l++;
    r--;
  }

  return s.join("");
}

console.log("Test 1", reverseString("hello"));
console.log("Test 2", reverseString("Hannah"));
console.log("Test 3", reverseString(""));
