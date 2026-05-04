function Anagrams(s, t) {

    //if length of t and s doesn't match i will directly return false
  if (s.length !== t.length) return false;


  //empty object has taken to store the each character
  const freq = {};

  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  //{ a: 3, n: 1, g: 1, r: 1, m: 1 }

  for (const ch of t) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;

  //one more approch
  //return s.split('').sort().join('') === t.split('').sort().join('');

}

console.log(Anagrams("anagram", "nagaram"));
console.log(Anagrams("rat", "car"));
