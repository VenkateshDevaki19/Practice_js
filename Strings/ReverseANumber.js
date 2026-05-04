function ReverseString(s) {
  const arr = s.split(""); //"h""e""l""l""o"

  //defining index for i and j for total length
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join("");

  //logic i have used here is two pointer approach
  //swap characters until they meet
}

console.log(ReverseString("hello"));//olleh
