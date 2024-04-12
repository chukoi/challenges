function isPowerOfThree(num: number): boolean {
  if (num === 1) return true;
  if (num <= 0) return false;
  if (num % 3 !== 0) return false;

  return isPowerOfThree(num / 3);
}

console.log("Test 1", isPowerOfThree(27));
console.log("Test 2", isPowerOfThree(4));
console.log("Test 3", isPowerOfThree(0));
