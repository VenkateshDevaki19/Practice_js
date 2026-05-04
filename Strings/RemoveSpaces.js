function RemoveSpaces(s) {
  let res = "";

  for (const ch of s) {
    if (ch != " ") res += ch;
  }

  return res;
}


console.log(RemoveSpaces("Hello World"));