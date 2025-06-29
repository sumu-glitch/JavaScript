function User(email,password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function() {
            return this._email.toUpperCase()
        },
        set: function (params) {
            this._email = params
        }
    })
    Object.defineProperty(this, 'password',{
        get: function() {
            return this._password.toLowerCase()
        },
        set: function (params) {
            this._password = params
        }
    })
}
const info = new User("user@gmail.com","Password")
console.log(info.email);
console.log(info.password);
