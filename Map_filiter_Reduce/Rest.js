//example 1 : using Rest parameters

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);

  console.log(theArgs.length);
}

myFun("one", "two", "three", "Four", "Five", "Six");
/*
output: - 
a, "one"
b, "two"
manyMoreArgs, ["three", "Four", "Five", "six"] <-- an array
*/

myFun("one", "two", "Three");

/*
output: - 
a, "one" 1
b, "two" 1
manyMoreArgs, ["Three"] 1 <-- an array with just one value
*/

myFun("one", "two");

/*
output: - 
a, "one"
b, "two"
manyMoreArgs, [] <-- still an array 
*/

myFun("one");

/*
output: - 
a, "one"
b, undefined
manyMoreArgs, [] <-- still an array 
*/

//Example2: -

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 50);

console.log(arr); //[30,50,100]
