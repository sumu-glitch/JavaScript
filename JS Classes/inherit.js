class User {
    constructor(userName) {
        this.userName = userName;
    }
    logMe(){
        console.log(`Username is ${this.userName}`);
        
    }
}

class Teacher extends User{
    constructor(userName,email,password) {
        super(userName)
        this.email = email
        this.password = password
    }
    addCource(){
        console.log(`A new cource was added by ${this.userName}`);
        
    }
}

const info = new Teacher("Lakhan","email@.com","lakhan@123")
info.addCource();

const infoTwo = new User("Lakhan")
infoTwo.logMe();

console.log(info instanceof Teacher);
