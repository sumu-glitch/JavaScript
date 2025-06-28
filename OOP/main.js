console.log('js object orianted programming');
//Object litterals

const user = {
    name:"Radha",
    surrname:"pande",

    userDetails : function dbCons() {
        // console.log(`User:${this.name}`);
        // console.log(`Surname:${this.surrname}`);
        console.log(this);
        
    }
}
// console.log(user.name);
console.log(user.userDetails());
