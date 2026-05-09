//example 1 : -

const colors = ["Red", "blue", "green"];

const [first, second, third] = colors;

console.log(first); //red
console.log(second); //blue
console.log(third); // green

//example2
const numbers = [10, 20, 30, 40];
const [a, , c] = numbers;

console.log(a); //10
console.log(c); //30

//example3

const fruits = ["apple"];

const [f1, f2 = "banana"] = fruits;

console.log(f1); //apple
console.log(f2); //banana

//example 4 swap variables
let x = 2;
let y = 9;

[x, y] = [y, z];

console.log(x); //9
console.log(y); //2

// example 5 using rest operator
const nums = [1, 2, 3, 4, 5];
const [first1, ...remaining] = nums;

console.log(first1); //1
console.log(remaining); //[2,3,4,5]

//example 5 object destructuring

const person = {
  name: "Venkatesh",
  age: 24,
  city: "Hyderabad",
};

const { name, age, city } = person;
console.log(name + age + city);

//rename variable

const user = {
  username: "Venkatesh",
  email: "venkatesh@gmail.com",
};

const { username: UserName, email: UserEmail } = user;

console.log(UserName);
console.log(UserEmail);

//default values

const employee = {
  empName: "Eren",
};

const { empName, empSalary = 80000 } = employee;

console.log(empName); //Eren
console.log(empSalary); //80000

//Nested Object destructuring
const student = {
  name: "Rahul",
  marks: {
    English: 90,
    Hindi: 86,
  },
};

const {
  marks: { maths, science },
} = student;

console.log(maths); //90
console.log(science); //86

// Rest properties

const car = {
  brand: "BMW",
  model: "x5",
  year: 2024,
};

const { brand, ...details } = car;

console.log(brand); //BMW
console.log(details); //{x5, 2024}

// function destructuring

function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
displayUser({
  name: "Venkatesh",
  age: 24,
});

//nested Destructuring

const arr = [1, [2, 3], 4];

const [a, [b, c], d] = arr;

console.log(a, b, c, d);

//combined Object + Array

const data = {
  name: "Venkatesh",
  Skills: ["JavaScript", "React", "Node"],
};

const {
  skills: [skill1, skill2],
} = data;

console.log(skill1);
console.log(skill2);

// Extract all values using destructuring
const numbers = [5, 10, 15];
const [a, b, c] = numbers;
console.log(a); //5
console.log(b); //10
console.log(c); //15

//rename name to UserName.
const user = {
  name: "Sri Ram",
  age: 22,
};

const { name: UserName } = user;

console.log(UserName);

// Xtract English

const student = {
  id: 1,
  marks: {
    English: 80,
  },
};

const {
  marks: { English },
} = student;

console.log(English); //80

//Swap two variables using destructuring

let o = 90,
  p = 89;
//swap
[o, p] = [p, o];

console.log(o);
console.log(p);

//Use rest operator to collect remaining elements.
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

//Extract name, age, and country from the user object. If country is missing, default it to 'India'. Log all three.

const user = { name: "Arjun", age: 25 };

const { name, age, country = "india" } = user;

console.log(name); //Arjun
console.log(age); //25
console.log(country); //india\

// Rewrite this using arrow functions + template literals
function greet(name, role) {
  //return "Hello " + name + ", you are a " + role + ".";
  return `Hello ${name}, you are a ${role}`;
}

let solution = (name, role) => {
  return `Hello ${name}, you are a ${role}`;
};
// Test it:
console.log(solution("Priya", "developer"));

//From the products array, filter items where price > 500, then return just their names in uppercase.

const products = [
  { name: "phone", price: 999 },
  { name: "book", price: 199 },
  { name: "laptop", price: 1200 },
  { name: "pen", price: 49 },
];

// Your code here — filter then map
const result = products
  .filter((product) => product.price > 500)
  .map((product) => product.name.toUpperCase);

console.log(result); //["PHONE","LAPTOP"]

//Use reduce to calculate the total price of all items in the cart array.
const cart = [
  { item: "shirt", price: 500 },
  { item: "shoes", price: 1500 },
  { item: "belt", price: 300 },
];

// Use .reduce() to get total
const total = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log("Total:", total); //2300

//Remove all duplicate values from the nums array using modern JS. Do not use a for-loop.

const nums = [1, 2, 3, 2, 4, 1, 5, 3];

// Remove duplicates — no for-loops allowed
//const set = new Set(nums);
const unique = [...new Set(nums)];

console.log(unique);
