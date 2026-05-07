// example1
const a = [1, 4, 9, 16, 25];

const res = a.map((s) => Math.sqrt(s));

console.log(res);

//example2 - multiply with 2
const b = [1, 2, 3, 7, 9];

const result = b.map((x) => x * 2);

console.log(result);

//example3 - square of the array

const c = [2, 5, 7, 8, 9, 4];

const output = c.map(function (index, val) {
  return { key: index, value: val * val };
});

console.log(output);

// parseInt() and map()

const a = ["10", "20", "30"];

const out = a.map((s) => parseInt(s));

console.log(out);
