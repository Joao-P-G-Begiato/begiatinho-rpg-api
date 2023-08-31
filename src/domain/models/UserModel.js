module.exports = class UserModel{
    constructor (name, login, password, email){
        this.name = name
        this.login = login
        this.password = password
        this.email = email
        this.role = 1
    }
}