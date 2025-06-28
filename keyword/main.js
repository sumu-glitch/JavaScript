//Coll and This keywords

function setUsername(userName) {
    this.userName = userName;
}

function createUsername(userName, email, password) {
    setUsername.call(this, userName);
    this.email = email;
    this.password = password;
}

const names = new createUsername("Gaurav","gaurav@gmail.com","Pass@123")
console.log(names);

