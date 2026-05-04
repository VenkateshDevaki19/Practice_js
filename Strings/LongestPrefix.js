function LongestPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if(!prefix) return "";
    }
  }
  return prefix;

// - Start: prefix = "flower"
// - Compare with "flow":
// - "flow".startsWith("flower") → false
// - Shorten: "flower" → "flowe"
// - "flow".startsWith("flowe") → false
// - Shorten: "flowe" → "flow"
// - "flow".startsWith("flow") → true → exit while loop.

}

console.log(LongestPrefix(["flower","flow","flight"]));