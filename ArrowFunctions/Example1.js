// Arrow function : - it is concise way to write the functions using => syntax
// syntax: - const functionName = (parameters) => {function body return result;};

// Arrow Function without parameters

const example = () => {
  console.log("Learning Arrow function");
};

example();

// single parameter

const square = (x) => x * x;
console.log(square(7));

// multiple parameters

const add = (x, y, z) => {
  console.log(x + y + z);
};
add(10, 20, 30);

//default parameter

const addition = (x, y, z = 40) => {
  console.log(x + y + z);
};

addition(10, 20);

// object literals

const personName = (firstName, lastName) => {
  ({ first: firstName, last: lastName });
};
console.log(personName("Venkatesh", "Devaki"));
