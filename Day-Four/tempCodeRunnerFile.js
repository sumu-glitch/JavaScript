// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined==0);
// console.log(undefined==null);
// console.log("2"===2);

let a = 5;
let b = a; // b is now a copy of a
a = 10; // Changing a does not affect b
console.log(b); // Output: 5

let obj1 = { name: "Pravin" };
let obj2 = obj1; // obj2 is a reference to obj1
obj1.name = "Kumar"; // Changing obj1 affects obj2
console.log(obj2.name); // Output: Kumar