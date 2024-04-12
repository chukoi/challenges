function isValidParentheses(s: string): boolean {
  const map = { ")": "(", "}": "{", "]": "[" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) stack.push(s[i]);
    else if (stack[stack.length - 1] !== map[s[i]]) stack.push(s[i]);
    else stack.pop();
  }
  return !stack.length;
}

console.log("Test 1", isValidParentheses("()"))
console.log("Test 2", isValidParentheses("()[]{}"))
console.log("Test 3", isValidParentheses("(]"))
