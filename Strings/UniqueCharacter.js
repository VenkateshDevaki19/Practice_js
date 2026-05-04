// return index of first character that appears only once. if none, return -1;

function firstUniqueChar(s) {
    //empty object we have taken for storing the frequency of characters
  const freq = {};

  //loop through each character and store it character count;
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  //
  for (let i = 0; i < s.length - 1; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
}

console.log(firstUniqueChar("leetcodel"));  // 0
console.log(firstUniqueChar("aabb"));