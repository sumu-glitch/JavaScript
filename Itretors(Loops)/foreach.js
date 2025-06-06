const myArr = [
  "Java",
  "Python",
  "Ruby",
  "Cpp",
  "JS",
  "NodeJs",
  "MongoDB",
  "MySQL",
];
myArr.forEach(function (vals) {
  // console.log(vals);
});

//using arrow function
myArr.forEach((i) => {
  // console.log(i);
});

const lang = [
  {
    name: "Java",
    extention: "java",
  },
  {
    name: "computer Language",
    extention: "java",
  },
  {
    name: "Python",
    extention: "py",
  },
];
lang.forEach((itm) => {
  // console.log(itm.name);
});

const myNums = [1, 2, 3, 4, 5, 6];

//most usable function --> filter
const numVar = myNums.filter((num) => {
  return num > 2; //filter me return keyword lagana hi padata hai nahi to value return nahi hoti hai
});
// console.log(numVar);

//map() function

const mapFun = myNums.map((num) => {
  //map function ha single line madhe without return keywork value return karato.
  return num + 2;
});
// console.log(mapFun);

//chaining

const chaining = myNums
  .map((num) => num * 7)
  .map((num) => num - 5)
  .filter((num) => {
    return num >= 12;
  });
// console.log(chaining);

const val = 0;
const reduceMethod = myNums.reduce((acc, itm) => acc + itm, val);
console.log(reduceMethod);
