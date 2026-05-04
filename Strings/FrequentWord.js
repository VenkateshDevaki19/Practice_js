// Javascript program to find the most frequent word in a string

function frequentWord(str) {
  let newString = str.split(" ");

  const freq = {};

  for (const ch of newString) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  //find the most frequent character

  let maxCount = 0;
  let freqWord = "";

  for (const f in freq) {
    if (freq[f] > maxCount) {
      maxCount = freq[f];
      freqWord = f;
    }
  }

  return freqWord;

  //   const set = new Set();

  //   for (const ch of newString) {
  //     set.add(ch);
  //   }

  //   return set;
}

let input = "apple banana apple orange banana apple";

let result = frequentWord(input);

console.log(result);
