const UserInfoValidation = require("../../utils/helpers/user-validator")
const UserModel = require("../../domain/models/UserModel")
const Crypter = require("../../Infra/cryptography/Crypter")

module.exports = class UserConstructor{
    constructor(info){
        this.info = info
    }
    async userGenerator(){
        const valid = new UserInfoValidation(this.info).validateUser()
        if(valid){
            const {name, login, password, email} = this.info
            const cryptedPassword = await new Crypter(password).cryptSubject()
            const user = new UserModel (name, login, cryptedPassword, email)
            return user
        }else{
            return false
        }
    }
}

