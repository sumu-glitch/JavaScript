function User(userName,midName,surName) {
    this.userName = userName;
    this.midName = midName;
    this.surName = surName;
    return this;
}
 
//isame jab ham dusari bar instance banate hai to vo dusara avla instance pahale vale ko override karata hai 
const info = User("Ratha","Mohan","Pande");
// console.log(info);
const infoTwo = User("Jagadish","Kashinath","Gavale")
// console.log(infoTwo);

//constructor function me dara override na ho isiliye ham (NEW) keyword ka use karate hai. New meanse naya

const infoThree = new User("Ratha","Mohan","Pande");
console.log(infoThree);
const infoFour = new User("Jagadish","Kashinath","Gavale")
console.log(infoFour);