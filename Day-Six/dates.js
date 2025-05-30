let date = new Date();
console.log(`Date: ${date}`);
console.log(`Date tostring method ${date.toString()}`);
console.log(`toDateString method ${date.toDateString()}`);
console.log(`toLocaleString method ${date.toLocaleString()}`);
console.log(typeof date);//date is a object

let mycreateDate = new Date(2025, 4,30);//month are always starting from 0
let myNewcreateDate = new Date(2025, 4,30,3,0,0);//month are always starting from 0
console.log(`My create date: ${mycreateDate.toDateString()}`);
console.log(`My new create date: ${myNewcreateDate.toLocaleString()}`);


//time stamp
let myTimeStamp = Date.now();
console.log(`My time stamp: ${myTimeStamp}`);//toFixed(0) to remove decimal places
console.log(`Get time mili-second to second ${Math.floor(myTimeStamp / 10000)}`);//toFixed(0) to remove decimal places

console.log(date.getDate());//get date of the month
console.log(date.getMonth());//get month (0-11)
console.log(date.getFullYear());//get full year
console.log(date.getHours());//get hours (0-23)
console.log(date.getMinutes());//get minutes (0-59)
console.log(date.getSeconds());//get seconds (0-59)
console.log(date.getDay());//get day of the week (0-6) 0 is Sunday

let againDate = new Date();
againDate.toLocaleString(
    'en-IN',
    {
        weekday: 'long'
    }
);
console.log(againDate);
