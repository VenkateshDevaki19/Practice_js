function RemoveVowels(s) {

    // skips characters if they are vowels while building result

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  //empty result initializing
  let result = "";

  for (const ch of s) {
    // adding each character into result
    if (!vowels.has(ch)) result += ch;
  }

  return result;
}

console.log(RemoveVowels("HelloWorld")); //Hllwrld
