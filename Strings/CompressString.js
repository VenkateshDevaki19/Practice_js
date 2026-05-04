function CompressString(s) {
  if (s.length === 0) return s;

  let res = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) {
      count++;
    } else {
      res += s[i - 1] + count;
      count = 1;
    }
  }

  return res;
}

console.log(CompressString("aaabbc")); // "a3b2c1"
console.log(CompressString("abbc"));    // "abc"
