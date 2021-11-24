const Manager = require('../lib/manager')

describe('Manager', () => {
    describe('getRole', () =>{
        it('should return the role of the Manager entered by the user', () => {
            let testManager = new Manager('testName', 'testID', 'testEmail', 'testOfficeNumber')
            let expectedResult = 'Manager'
            let result = testManager.getRole()
            expect(result).toEqual(expectedResult)
        })
    })
})