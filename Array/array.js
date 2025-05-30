//array
let array1 = [1,2,3,4,5,"Sumu"];
// console.log(array1);

let array2 = new Array(1,2,3,4,5,"Sumu",true,undefined,null);
// console.log(array2);
// console.log(array2[0]);
// console.log(array1[5]);

// Array methods
// console.log(`length of array1 is : ${array1.length}`);
// array1.push(6); 
// array2.pop(); 
// array1.unshift("Hii");
// array2.shift();
// console.log(array1); 
// console.log(array2); 
// const array3 = array1.join()
// console.log(typeof array1);

// console.log(typeof array3);
const sliceArray = array1.slice(1,4);
console.log(sliceArray);

const spliceArray = array1.splice(1,4);
console.log(spliceArray);
/*
Slice and Splice are two different methods in JavaScript arrays.
- `slice()` is used to extract a section of an array and returns a new array without modifying the original array. It takes two arguments: the start index and the end index (exclusive).
Ex:- const newArray = array1.slice(1, 4); // extracts elements from index 1 to 3
// console.log(newArray); // Output: [2, 3, 4]



- `splice()` is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and takes three arguments: the start index, the number of elements to remove, and the elements to add.
Ex:- const removedElements = array1.splice(1, 2, 6, 7); // removes 2 elements starting from index 1 and adds 6 and 7
// console.log(removedElements); // Output: [2, 3]
*/







