//arro functions in js
const pantaName = {
    names:"ninja pants",
    price: 100,
    description: function() {
        console.log( `These are ${this.names} and they cost ${this.price} INR.`); //this return current context of the object
    }
}
// pantaName.description();
// console.log(this);

function normalFunction() {
    const name = "Rohan";//ham aise likhte hain kyuki arrow function ka this global object ko refer karta hai
    // console.log(this.name); //this returns the global object in non-strict mode or undefined in strict mode
}



const normalFunction2 = function(){
    const name = "Rohan";
    console.log(this.name); //ham aise bhi this ko use nahi  kar sakte kyuki ye function ka this refer karta hai
};
// normalFunction2();

const arrowFunction3 = () => {
    const name = "Rohan";
    console.log(`this is ${this.name}`);
}
// arrowFunction3();



//syntax of arrow function ()=>{}
const realArrowFunction = (name) => {
    console.log(`This is ${name}`);
}
// realArrowFunction("Prakash");



const addArrowFunction = (a,b) => a + b //thats called implecit return
console.log(addArrowFunction(5,10));
//agar ham {} use karte hain to aapko return likhna padta hai
//parenthesis me return kkeyword nahi likhna padta jaise const addArrowFunction = (a,b) => (a + b)
//arar objects ko likhna padta to aise likhate hai const addArrowFunction = (a,b) => ({a: a, b: b})