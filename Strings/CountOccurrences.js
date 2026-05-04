function CountOccurrances(s, c) {
  if (s.length === 0) return 0;

  let count = 0;

  for (const ch of s) {
    if (ch === c) count++;
  }

  return count;
}

console.log(CountOccurrances("banana", 'a'));
