function largestElement(array1) {
  let max = array1[0];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > max) {
      max = array1[i];
    }
  }

  return max;
}

let array2 = [20, 10, 20, 4, 100];
let result2 = largestElement(array2);
console.log(result2);
