const UserInfoValidation = require ("../../../utils/helpers/user-validator")

describe('User Creation Tests', ()=>{
    test('', ()=>{
        const mockReqBody = {
            name: "João Paulo Gotardi Begiato",
            login: "jpbegiato",
            password: "Dudaema@3005",
            confirmPassword: "Dudaema@3005",
            email: "jpbegiato@hotmail.com"
        }

        const validation = new UserInfoValidation(mockReqBody).validateUser()
        expect(validation).toBe(true)
    })
})


