//javascript program to check if the given string is a program or not a-z

function CheckPangram(str) {
  str = str.toLowerCase();

  const set = new Set();

  for (const ch of str) {
    if (ch >= "a" && ch <= "z") {
      set.add(ch);
    }
  }

  //check if the size is 26 or not
  return set.size === 26;
}

let str = "When zombies arrive, quickly fax judge pat";

if (CheckPangram(str) == true) {
  console.log("Given string is a pangram ");
} else {
  console.log("Given String is not a pangram");
}
