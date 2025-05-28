//comparision operation

//awaid this types of comparision
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined==0);
// console.log(undefined==null);
// console.log("2"===2);

const id = Symbol('123')
const idAnother = Symbol('123')
console.log(id == idAnother) // false

const myFunction = function greet () {
  console.log('Hello, World!')
}
console.log(typeof myFunction) // function;
