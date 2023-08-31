const UserInfoValidation = require ("../utils/helpers/user-validator")
const UserConstructor = require("../data/adapter/UserConstructor")
const dotenv = require("dotenv")


dotenv.config()

describe('User Creation Tests', ()=>{
    const mockReqBody = {
        name: "João Paulo Gotardi Begiato",
        login: "jpbegiato",
        password: "Dudaema@3005",
        confirmPassword: "Dudaema@3005",
        email: "jpbegiato@hotmail.com"
    }
    test('validation info test', ()=>{
        const validation = new UserInfoValidation(mockReqBody).validateUser()
        expect(validation).toBe(true)
    })

    test('userGeneration test', async ()=>{
        const user = await new UserConstructor(mockReqBody).userGenerator()
        const test = user != false ? true : false
        expect(test).toBe(true)
    })

})





