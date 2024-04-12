function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  let output = [];
  let firstword = sorted[0];
  let lastword = sorted[sorted.length - 1];
  for (var i = 0; i < firstword.length; i++) {
    if (firstword[i] == lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join("");
}

console.log("Test 1", longestCommonPrefix(["flower", "flow", "flight"]));

console.log("Test 2", longestCommonPrefix(["dog", "racecar", "car"]));
