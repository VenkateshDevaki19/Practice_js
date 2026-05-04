function RemoveDuplicate(s) {
  const seen = new Set();

  let res = "";

  for (const ch of s) {
    if (!seen.has(ch)) {
      seen.add(ch);
      res += ch;
    }
  }

  return res;
}

console.log(RemoveDuplicate("banana"));
