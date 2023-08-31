const bcrypt = require("bcrypt")

module.exports = class Crypter{
    constructor (subject){
        this.subject = subject
    }

    async cryptSubject(){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.subject, salt)
        return hash
    }
}