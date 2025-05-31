const arr1=["One", "Two", "Three", "Four","Five"];
const arr2=["Ten","Nine","Eight","Seven","Six"];
//by using concat method
let arr3 = arr1.concat(arr2);
// console.log(arr3);

//by using push method
// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[5][4]);

// by using spread operator
let arr4 = [...arr1,...arr2];//most of the time the developers use this method
// console.log(arr4);

const arr5  = [1,2,3,[4,5,6],7,8,9,[10,11,12,[13,14,15,16,17],18],19,20];
// let a1 = arr5.flat(Infinity);
// console.log(arr5);
// console.log(a1);

let a2 = "sumu";
// console.log(a2);
// console.log(Array.isArray(a2));
let a3 = Array.from(a2);
// console.log(Array.isArray(a3));
console.log(Array.of({name:"Sumit"}));

