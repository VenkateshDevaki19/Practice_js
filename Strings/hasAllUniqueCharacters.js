function hasAllUnique(s) {
  const seen = new Set();

  for (const ch of s) {
    if (seen.has(ch)) return false;
    seen.add(ch);
  }

  return true;

//other logic instead of Set, here we are using Object
//   const freq = {};
//   for (const ch of s) {
//     if (freq[ch]) return false;
//     freq[ch] = 1;
//   }
//   return true;

}

console.log(hasAllUnique('abcd'));
console.log(hasAllUnique('aba'));
