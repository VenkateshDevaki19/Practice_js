function ReverseSentence(s) {
  let sen = s.split(" ");

  sen.reverse();

  return sen.join(' ');

}

console.log(ReverseSentence("I love coding"));
