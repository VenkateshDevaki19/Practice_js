//arr[] = {1, 2, 0, 4, 3, 0, 5, 0}

function PushZerosToEnd(arr, n) {
  let count = 0;

  // traverse the array, if element is non-zero, 
  // then replace the element at index 'count' with this element

  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < n) {
    arr[count++] = 0;
  }
}

let arr = [1, 2, 0, 4, 3, 0, 5, 0];
let n = arr.length;

PushZerosToEnd(arr, n);

console.log("Array after pushing all zeros to end of array : ");
console.log(arr.join(" "));
