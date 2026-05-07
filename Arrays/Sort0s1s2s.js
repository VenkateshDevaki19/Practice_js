//arr = [0,1,2,0,1,2]

function sortIncrement(arr) {
  let c1 = 0,
    c2 = 0,
    c3 = 0;

  // traverse array and get stored in above

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      c1 += 1;
    } else if (arr[i] === 1) {
      c2 += 1;
    } else {
      c3 += 1;
    }
  }

  let idx = 0;

  //place all the 0s
  for (let i = 0; i < c1; i++) {
    arr[idx++] = 0;
  }

  //place all the 1s
  for (let i = 0; i < c2; i++) {
    arr[idx++] = 1;
  }

  //place all the 2s
  for (let i = 0; i < c3; i++) {
    arr[idx++] = 2;
  }
}

let arr = [0, 1, 2, 0, 1, 2];
sortIncrement(arr);
console.log(arr.join(" "));
