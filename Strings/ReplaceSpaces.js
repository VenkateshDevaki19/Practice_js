function ReplaceSpaces(s) {
  let res = "";

  for (const ch of s) {
    if (ch === ' ') res += "%20";
    else res += ch;
  }

  return res;
}

console.log(ReplaceSpaces("Hello World, learning JS Strings"));

