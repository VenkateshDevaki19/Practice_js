function LongestWord(sentence) {
   
    //\s+ is regex operator which removes the spaces, tabs. split is using to split the sentence into words
  const words = sentence.split(/\s+/);

  let ans = "";

  for (const w of words) {
    if (w.length > ans.length) ans = w;
  }

  return ans;
}

console.log(LongestWord("I love competitive programming!"));
