function ExtractNumber() {
  let str = "jhk7986757";
  console.log(str);

  let matches = str.replace(/[^0-9]/g, "");

  if (matches) {
    console.log(matches);
  }
}

ExtractNumber();

// using loop

function Extract(str) {
  let numbers = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers += str[i];
    }
  }
  console.log(numbers)
}

let str1 = "JHK89756557587";
console.log(str1)
Extract(str1)