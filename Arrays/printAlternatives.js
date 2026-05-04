function printAlternatives(arr) {
  let bag = [];

  for (let i = 0; i < arr.length; i += 2) {
    bag.push(arr[i]);
  }
  return bag;
}

const array = [10, 20, 30, 40, 50];
let result = printAlternatives(array);
console.log(result);
