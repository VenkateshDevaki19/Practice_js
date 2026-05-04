function printSubArrays(arrays) {
  const n = arrays.length;

  //pick starting point
  for (let i = 0; i < n; i++) {
    //pick ending point
    for (let j = i; j < n; j++) {
      //print subarray between current starting and ending points
      let subArray = [];
      for (let k = i; k <= j; k++) {
        subArray.push(arr[k]);
      }
      console.log(subArray.join(" "));
    }
  }
}

const arr = [1, 2, 3, 4];
console.log("All non-empty subArrays");
printSubArrays(arr);
