const myObj = {
    "js":"Java Script",
    "C++":"C programing",
    "py":"Python",
    "java":"java Applications"
}

for (const key in myObj) {
    // console.log(`Longforms of ${key} is- ${myObj[key]}`);
}

//for array
const myArr = ["Java","Python","Ruby","Cpp","JS","NodeJs","MongoDB","MySQL"]

for (const key in myArr) {
    console.log(myArr[key]);
    
}