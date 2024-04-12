const removeDuplicates = function (s: string): string {
  let stack = [];

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }

  return stack.join("");
};

console.log("Test 1", removeDuplicates("abcaakkh"));
console.log("Test 2", removeDuplicates("a"));
console.log("Test 3", removeDuplicates("aa"));
console.log("Test 2", removeDuplicates(""));
