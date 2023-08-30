module.exports = class UserInfoValidation{
    constructor(body){
        this.body = body
    }
    validateUserName(){
        const validation = this.body.name.length > 3  && typeof this.body.name === "string"
        return validation
    }

    validateUserLogin(){
        const validation = this.body.login.length > 3  && typeof this.body.login === "string"
        return validation
    }

    validateUserEmail(){
        const email = this.body.email
        const validateUserEmailType = typeof this.body.email === "string"
        const validateUserEmailLength = email.length > 5
        const validateUserEmailIncludesArroba = email.includes("@") && email.indexOf("@") != email.length-1
        const validateUserEmailIncludesDot = email.includes(".") && email.indexOf(".") != email.length-1
        const validation = validateUserEmailLength && validateUserEmailIncludesArroba && validateUserEmailIncludesDot && validateUserEmailType
        return validation
    }

    validatePassword(){
        const pass = this.body.password
        const conPass = this.body.confirmPassword
        const validateType = typeof pass === "string" && typeof conPass == "string"
        const validateEquality = pass === conPass
        const numbers = /([0-9])/
        const lowercase = /([a-z])/
        const uppercase = /([A-Z])/
        const specialCharacters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/
        const validatePasswordStregth = pass.match(numbers) && pass.match(lowercase) && pass.match(uppercase) && pass.match(specialCharacters)
        return validateEquality && validatePasswordStregth && validateType
    }

    validateUser(){
        return this.validatePassword() && this.validateUserEmail() && this.validateUserLogin() && this.validateUserName()
    }
}
