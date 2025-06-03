//functions in javascript
console.log(
  "*******************************************Functions in JavaScript*********************************"
);
// function functions(num1, num2) { //<-(num1, num2) are parameters
// console.log(num1 + num2);
// }
function functions(num1, num2) {
  //<-(num1, num2) are parameters
  const result = num1 + num2;
  return result;
  console.log("Function of addition");
  //function chya return stetement nantar kahihi lihilela print hot nhi karn return statement chya nantar function execute hot nahi.
}
const result = functions(5, 10); //5, 10 are arguments
// console.log("Addition is", result);






function names(name1) {
  if (!name1) {
    console.log(name1);
    return "Name is not provided";
  }
  return "Name is " + name1;
}
// console.log(names("Pratik")); // "Pratik" is an argument









function cartItems(...items) {//(...items) is a rest parameter that allows the function to accept any number of arguments as an array
    return items;  
}
const items = cartItems("Apple", "Banana", "Orange");
// console.log(items);

//put the value in function using object
const deals = {
    name:"Samsung LED TV",
    price:"22500"
}

function deeals(deal){
    console.log(`Name is ${deal.name} and price is ${deal.price}`);
}
// deeals(deals);
deeals({
    name: "Realme 11 Pro",//using object literal
    price: "23900"
});

const arr = [1, 2, 3, 4, 5];
function arrVal(arr){
    console.log(`array value ${arr[1]}`);
}
// arrVal(arr); //accessing array value using function
arrVal([10, 20, 30, 40, 50]); //accessing array value using function with array literal