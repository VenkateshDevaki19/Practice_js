//find the largest number in an array

function largestNumber(array) {
  let max = array[0];

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;

  // using spread operator also we can return max
  // return Math.max(...array);

  //using sort also we can return max integer in an array
  // array.sort((a, b) => a-b);
  //return array[array.length - 1];

  //using reduce()method
  // array.reduce((largest, current) => (current > largest ? current : largest), arr[0]);
}

const input = [10, 10, 38, 20, 13];
console.log(largestNumber(input));