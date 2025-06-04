//immediately envocked function expression (IIFE) is a function that runs as soon as it is defined
//IIFE is use for encapsulation, to avoid polluting the global scope veriable
//syntax: (function(){})();

(function namedIife() {
  console.log("Hello from the named IIFE!");
})();//without colon the next function aren't execute

( (name) => {//using arrow function syntax and parameter function
  console.log(`Hello, ${name}`);

  console.log(`This is unnamed IIFE, it is also called arrow function IIFE`);
})("Gaurav");//initialize function block
