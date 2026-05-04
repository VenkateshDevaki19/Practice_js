function linearSearch(ar,search){
    // if(arr.length === 0) return -1;

    for(let i=0; i<ar.length; i++){
        if(ar[i] === search){
            return i;
        }
    }

    return -1;
}

let array1 = [1,2,3,4];
let s = 3;
let result1 = linearSearch(array1, s);
console.log(result1);