function customMap(arr, callback) {
  let result = [];

  for (let item of arr) {
    result.push(callback(item));
  }

  return result;
}

const output = customMap([1, 2, 3], (x) => x * 2);

console.log(output);
