function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  s.split("").forEach(c => t = t.replace(c, ""));

  return !t.length
}

console.log("test 1", isAnagram("anagram", "nagaram"));
console.log("test 2", isAnagram("rat", "car"));

