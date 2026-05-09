//example 1

const numbers = [1, 2, 3];

const copyNumbers = [...numbers];

console.log(copyNumbers); // [1,2,3]

//example2 : adding multiple elements using spread operator

const a = [10, 20];

const b = [...a, 30, 40];

console.log(a); //[10, 20]
console.log(b); //[10, 20, 30, 40];

//example3: find min/max using spread operator

let c = [1, 3, 6, 8, -1];

console.log(Math.min(...c)); //-1

//example4: passing array elements as function parameters

function add(x, y, z) {
  return x + y + z;
}

let a = [10, 20, 30];
console.log(add(...a)); //60

//example 5: concatenate

let d = [1, 2, 3];
let e = [4, 5];

d = [...d, ...e];

console.log(d); // 1,2,3,4,5

// example 6: clone object
const usr = {
  name: "Eren",
  age: 22,
};

const cloneUser = { ...usr };

console.log(cloneUser);

//{"name":"Eren", "age":"22"}

//example 7: merging 2 objects

const usr1 = {
  name: "Naruto",
  age: "25",
};

const usr2 = {
  name: "Sasuke",
  village: "Leaf village",
};

const mergedObjects = { ...usr1, ...usr2 };

console.log(mergedObjects); //{"name":"Sasuke", "age":"25","village": "Leaf village"}
