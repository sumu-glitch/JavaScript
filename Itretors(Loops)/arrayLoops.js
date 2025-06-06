//for-of loop
/*
The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/
const myArr = [1,2,3,4,5,6,7,8,9,10];
const myString = "RamKumar Bansal"
// for (const element of myString) {
//     console.log(element); 
// }

/*The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.*/

const myMap = new Map();
myMap.set("Name","Rajat");
myMap.set("At","Nagpur");
myMap.set("Di","Nagpur");
myMap.set("Ta","Ravanvadi");
myMap.set("PinCode",123456);
// console.log(myMap);

for (const [key,value] of myObj) {
    console.log(value);
    
}