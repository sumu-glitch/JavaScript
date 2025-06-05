/*
Comparision Operators
1. Equal to (==)
2. Not equal to (!=)   
3. Strict equal to (===)
4. Strict not equal to (!==)
5. Greater than (>)
6. Less than (<)
7. Greater than or equal to (>=)
8. Less than or equal to (<=)
9. Ternary operator (condition ? exprIfTrue : exprIfFalse)
10. Logical AND (&&)
11. Logical OR (||)
12. Logical NOT (!)
*/

//Falsey values in JavaScript
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 7. BigInt 0n
// 8. -0

const logedIn = 0;
if (logedIn === true) {
    console.log("Welcome to the website");
}else{
    console.log("Please log in to continue");
    
}

//checking if a variable is defined or not
let age = [];
if (age.length === 0) {
    console.log("Age is empty");
}else{
    console.log("Age is defined");
}

let obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}else{
    console.log("Object is defined");
}

//nullish coalescing operator (??)
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
let name = "Harry";
let userName = name ?? "Guest";
console.log(userName); 

//ternary operator
let isLoggedIn = 1;
// Using a ternary operator to set a message based on the isLoggedIn variable
 if (isLoggedIn) {
    console.log("Welcome back!");
}else {
    console.log("Please log in");
}
// Using ternary operator
// Syntax: condition ? exprIfTrue : exprIfFalse
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);