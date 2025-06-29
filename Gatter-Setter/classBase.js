//Gatters and setters in js

class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    //gatter and setter ke liye jo property ka name hai vahi name lena hota hai.
    //gatter me hamesha return ka use hota hai que ki hame value ko bhejana hota hai setter ko
    //gatter
    get email(){
        return `${this._email}@gmail.com.`.toUpperCase()
    }
    get password(){
        return this._password
    }
    //setter
    set email(value){
        `${this._email = value}`
    }

    set password(value){
        this._password = value
    }
}
const info = new User("sumu","Pass@123")
console.log(info.email);