function secondLargest(array3) {
  let firstMax = -1;
  let secondMax = -1;

  for (let i = 0; i < array3.length; i++) {
    if (array3[i] > firstMax) {
      firstMax = array3[i];
    }
  }

  for (let i = 0; i < array3.length; i++) {
    if (array3[i] > secondMax && array3[i] !== firstMax) {
      secondMax = array3[i];
    }
  }

  return secondMax;
}

let a = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(a));
