function countVowelsConsonants(s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  //initializing 
  let v = 0,
    c = 0;

    //loop through each character
  for (const ch of s) {
    //check only small letter characters
    if (ch >= "a" && ch <= "z") {
      if (vowels.has(ch)) v++;
      else c++;
    }
  }

  return { Vowels: v, Consonants: c };
}

console.log(countVowelsConsonants("hello"));
