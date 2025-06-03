//object singleton
const Objects ={}
Objects.name = "Ram";
Objects.email = "ram@mail.com";
Objects.logedin = true;
// console.log(Objects);

const user = {
    id:"user1",
    userName : {
        firstName: "Ram",
        userLastName : {
            lastName: "Kumar"
        }
    },
    email: "ram@gmail.com"
}
// console.log(user.userName.userLastName.lastName);

const user2 = {
    a:"user2",
    b : "RamBharose"
}

// const user3 = {user, user2};//ause kisi bhi objects ko combine nahi kiya jata hai q ki vo combine nhi hote vo bs dusare object me as it is store hote hai
// const user3 = Object.assign({}, user, user2);
//{}<-- target object, user, user2 --> source objects agar ye bress nahi diya jaye to fir sabhi bojects pahale objects me storre hote tai.naki kisi blank obj me
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//most common tarika (spread operator(...))
const user3 = {...user, ...user2};

// console.log(user3);
// console.log(user2.hasOwnProperty("v"));

// console.log(Object.keys(user3));
// console.log(Object.values(user3));
console.log(Object.entries(user3));



