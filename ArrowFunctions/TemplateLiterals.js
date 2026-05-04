/*Template literals is modern way of create strings in javascript using backticks `` instead of single and double quotes.
1. cleaner 
2. Easier to read 
3. Better for dynamic content
*/

// Basic Example:-

const name = "Venkatesh";

const message = `hello ${name}`;

console.log(message);

// example 2

const age = 26;
const text = "My name is " + name + " and I am " + age + " years old.";

// with template literals

const text1 = `My name is ${name} and I am ${age} years old.`;
console.log(text1);

//Embedding variables & expression
const city = "Hyderabad";

console.log(`Welcome to ${city}`);

const a = 10;
const b = 20;
console.log(`Sum = ${a + b}`);

//calling Functions inside Template literals

function greet(name) {
  return `Good Morning ${name}`;
}

console.log(`${greet("Venkatesh")}`);
