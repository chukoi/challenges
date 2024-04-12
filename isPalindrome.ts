function isPalindrome(s: string): boolean {
  const charString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = charString.length - 1;

  while (left < right) {
    if (charString[left++] !== charString[right--]) return false
  }

  return true
}

console.log("test 1", isPalindrome("A man, a plan, a canal: Panama"));
console.log("test 2", isPalindrome("race a car"));
console.log("test 3", isPalindrome(" "));
