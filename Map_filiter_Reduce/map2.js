// pull a single field out of each object

const users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Zoro", age: 21 },
];

const names = users.map((u) => u.name);

console.log(names);
//['Alice','Bob','Zoro']

//passes the current index as a second argument to your callback

const fruits = ["apple", "banana", "cherry"];
const labelled = fruits.map((fruit, i) => `${i + 1}. ${fruit}`);

console.log(labelled);

//['1. apple', '2. banana', '3. cherry']

//Transform strings  to numbers
const strs = ["3", "4", "6", "1", "9"];

const nums = strs.map(Number);

console.log(nums);
//[3, 1, 4, 1, 5]

console.log(nums.reduce((a, b) => a + b, 0)); //14

// Transform the shape of each object. rename keys, ad computed fields, or pick a subset.

const products = [
  { id: 1, title: "pen", price: 1.5 },
  { id: 2, title: "Ruler", price: 2.0 },
  { id: 3, title: "Eraser", price: 0.75 },
];

const display = products.map(({ id, title, price }) => ({
  id,
  label: title.toUpperCase(),
  priceLabel: `$${price.toFixed(2)}`,
}));

console.log(display[0]);
