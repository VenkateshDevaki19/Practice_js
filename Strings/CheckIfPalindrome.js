function palindrome(s) {
  s = s.toString();
  let result = "";

  for (i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  if (s == result) {
    return "yes it is palindrome";
  } else {
    return "Not a palindrome";
  }
}

console.log(palindrome(1221));
