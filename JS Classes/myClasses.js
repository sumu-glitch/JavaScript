// ye sabhi ES6 ke bad ki kahani hai

class user {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}@Pass123`
    }
}

const info = new user("navya","nv@gmail.com","pass");
// console.log( info.encryptPassword() );
console.log(info);
