//objects
//two ways to create objects
//1. using object literal notation
let mySymbol = Symbol("description");
let person = {
    name: "Ram",
    "fullName": "Ram Tiwari", // property with space in name
    age: 30,
    city: "Bharat",
    mySymbol:"Key1",//symbol ko kabhi aise nahi define akrete q ki ye jo upar symbol likha hai vo uek unique value hai (symbol). to usaka datatype bhi symbol hi ana chaiye na ki string
    [mySymbol]: "Key2" // using computed property name with symbol
}; 
// console.log(person.name);// Accessing property using dot notation
// console.log(person["fullName"]); // Accessing property using bracket notation
// console.log(typeof person.mySymbol);//yaha pe symbol ka datatype string aaya hai
// console.log(typeof person[mySymbol]);//yaha pe symbol ka datatype symbol aaya hai
 person.fullName = "Jadugar Bhayya"
 //  console.log(person.fullName);
 //agar hame kiso key ki value vo change nahi karana hai to usako freeze karake rak sakate hai.
//  Object.freeze(person);
 person.fullName = "Raja Babu"
//  console.log(person);
 
 person.an = function() {
    console.log("Hello, World!");
 }
 person.ann = function() {
    console.log(`Hello, User!  ${this.fullName} kya halchal hai`);
 }
 console.log(person.an()); 
 console.log(person.ann()); 