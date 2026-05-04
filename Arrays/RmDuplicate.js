function RmDuplicate(arry) {
  let n = arry.length;

  let bag = [];

  for (let i = 0; i < n; i++) {
    if (!bag.includes(arry[i])) {
      bag.push(arry[i]);
    }
  }

  return bag;
}

let are = [2, 2, 2, 2, 2, 2];
console.log(RmDuplicate(are));
