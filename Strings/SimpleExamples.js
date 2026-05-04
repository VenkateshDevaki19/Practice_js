//Sort a string in Js

let s1 = "javascript";
//let s2 = s1.split('').sort().join(''); // first convert it to array of characters, sort the array, and then join
let s2 = Array.from(s1).sort().join("");
console.log(s2); //aacijprstv

//String contains only alphabetic characters or not

let s = "HelloWorld";
let isAlphabetic = /^[A-Za-z]+$/.test(s); //using regex expression to match only alphabetic characters.
console.log(isAlphabetic);

//First letter of a string uppercase

const se1 = "javascript";
const se2 = se1.charAt(0).toUpperCase() + se1.slice(1);
console.log(se2);

//convert comme separated string to array

const see1 = "apple,banana,carrot";
const see2 = see1.split(",");
console.log(see2);

// get last character of string

const lchar = s.charAt(s1.length - 1);
console.log(lchar);

// convert string into array

const array = s1.split("");
console.log(array);

//Convert object to string

let object = {
  name: "Lord Venkateshwara",
  city: "Tirupati",
  contact: 1234567890,
};

let answer = JSON.stringify(object);

console.log(answer);

// remove punctuations in a given string - using split join and filter function
function removePuncatuations(str) {
  return str
    .split("")
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .join("");
}

let text = "Lea@rning Javascript to switch company%4$";
let cleanedText = removePuncatuations(text);
console.log(cleanedText);

// Capitalize the first of every sentence in a string

function CapitalizeSentence(str) {
  const sentences = str.split(". ");
  sentences.forEach((sentence, index) => {
    sentences[index] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  return sentences.join(". ");
}

const inputString = "hello. how are you? i am fine.";
const CapitalizeString = CapitalizeSentence(inputString);
console.log(CapitalizeString);

//characters to opposite case in a string

const st1 = "Hello World";

let st2 = "";

for (let i = 0; i < st1.length; i++) {
  const char = st1[i];

  st2 += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(st2);

//Remove consecutive Duplicate

const RmConsecutive = (inputData) => {
  let output = "";
  let lastChar = "";

  for (const ch of inputData) {
    if (ch !== lastChar) {
      output += ch;
      lastChar = ch;
    }
  }

  return output;
};

const testString = "geeks for geeks";

console.log(RmConsecutive(testString));

// count equal no. of pairs in string

function pairs(string) {
  let strLength = string.length;

  let pairCount = 0;

  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < strLength; j++) {
      if (string[i] == string[j]) {
        pairCount++;
      }
    }
  }

  return pairCount;
}

let answ = "pqr";
console.log(pairs(answ));
