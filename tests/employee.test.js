const Employee = require('../lib/employee')


describe('Employee', () => {
    describe('getName', () => {
        it('should return the name of the employee the user inputs', () => {
            let testEmployee = new Employee('testName', 'testID', 'testEmail')
            let expectedResult = 'testName'
            let result = testEmployee.getName()
            expect(result).toEqual(expectedResult)
        })
    })

    describe('getEmail', () => {
        it('should return the email of the employee the user inputs', () => {
            let testEmployee = new Employee('testName', 'testID', 'testEmail')
            let expectedResult = 'testEmail'
            let result = testEmployee.getEmail()
            expect(result).toEqual(expectedResult)
        })
    })
    
    describe('getID', () => {
        it('should return the ID of the employee the user inputs', () => {
            let testEmployee = new Employee('testName', 'testID', 'testEmail')
            let expectedResult = 'testID'
            let result = testEmployee.getId()
            expect(result).toEqual(expectedResult)
        })
    })
})