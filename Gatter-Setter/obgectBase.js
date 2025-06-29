const User = {
    _email:"e@email.com",
    _pass:132,

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    },
    get pass(){
        return this._pass.toUpperCase();
    },
    set pass(value){
        this._pass = value
    }
}
//factory function ka use karake ham object create kar sakate hai
const info = Object.create(User)
console.log(info.email);
