function calc(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

console.log(calc(6, 9, add)); // 15
console.log(calc(6, 9, mul)); //63

// callback in eventListner

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button Clicked!");
});
