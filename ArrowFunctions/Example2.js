// rewrite this using arrow functions + template literals

function greet(name, role) {
  return "Hello " + name + ", you are a " + ".";
}

//arrow function
const greeting = (nam, role) => {
  // "Hello "+ nam + ", you are a "+ role + ".";
  `Hello ${nam}, you are a ${role}. `;
};
greeting("Venkatesh", "Analyst");

// =================================================================
//Question 2
// Regular function — rewrite as arrow function
function square(n) {
  return n * n;
}
console.log(square(5));

// Arrow function
const squares = (n) => n * n;
console.log (squares(4));

// =================================================
// Question 3
// 1. Implicit return (one line, no braces)
//const doubleImplicit = /* your code */

// 2. Explicit return (with curly braces)
//const doubleExplicit = /* your code */

console.log(doubleImplicit(6));   // 12
console.log(doubleExplicit(6));   // 12

//arrow function  - implicit
const double = x = x * 2;
console.log (double(6));

//explicit
const doubleEXP = (Y) => {return Y * 2};
console.log(doubleEXP(6));

// ===============================================
//Question 4 
// Write fullName as an arrow function
const fullName = /* your code */

console.log(fullName("Priya", "Sharma"));   // Priya Sharma
console.log(fullName("Rahul", "Verma"));    // Rahul Verma

const name1 = (firstName, lastName) => {
    // ({first: firstName, last:lastName});
    `${firstName} ${lastName}`;
}

console.log(name1("Priya", "Sharma"));

// ======================================================
//Question 5 
// Arrow functions need () around objects when returning inline
const makePerson = (name2, age)=>{
    ({name: name2, age:age});
};

console.log(makePerson("Anil", 30));
// { name: "Anil", age: 30 }