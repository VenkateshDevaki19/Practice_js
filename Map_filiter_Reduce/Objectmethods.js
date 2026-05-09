// Example 1 object.keys()

const user = {
  name: "Venkatesh",
  age: 24,
  city: "Hyderabad",
};

const keys = Object.keys(user);
const values = Object.values(user);

console.log(keys); // ["name", "age", "city"]
console.log(values); //["Venkatesh", 24, Hyderabad]

//example2 iteration approach
const user2 = {
  name: "Venkat",
  age: 24,
  city: "Hyderabad",
};

Object.keys(user2).forEach((key) => {
  console.log(key, user2[key]);
});

Object.values(user2).forEach((value) => {
  console.log(value);
});

Object.entries(user2);

// convert object to array
const userN = {
  name: "venkatesh",
  age: 26,
};

console.log(Object.entries(userN));

//Count properties
const car = {
  brand: "BMW",
  model: "x5",
  year: 2024,
};

console.log(Object.keys(car).length); //3

//sum object values
const marks = {
  maths: 90,
  telugu: 89,
  English: 85,
};

console.log(Object.values(marks).reduce((sum, mark) => sum + mark, 0));
