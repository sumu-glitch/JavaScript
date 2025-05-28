console.log("Hello, World!");
const accId= 1234567890;
let accEmail = "gmail@gmail.com";
var accBalance = 1000.50;
address = "123 Main St, City, Country";
console.log("Account ID:", accId);
console.log("Account Email:", accEmail);
console.log("Account Balance:", accBalance);

// accId = 9876543210; //Not allowed, as accId is a constant
// console.log("Updated Account ID:", accId);
accEmail = "newemail@gmail.com";
console.log("Updated Account Email:", accEmail);
accBalance += 500.00;
console.log("Updated Account Balance:", accBalance);
address = "Mumbai"
console.table([accEmail,accBalance,address])
