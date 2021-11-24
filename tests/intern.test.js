const Intern = require('../lib/intern')

describe('Intern', () => {
    describe('getSchool', () =>{
        it('should return the school of the Intern entered by the user', () => {
            let testIntern = new Intern('testName', 'testID', 'testEmail', 'testSchool')
            let expectedResult = 'testSchool'
            let result = testIntern.getSchool()
            expect(result).toEqual(expectedResult)
        })
    })
    describe('getRole', () =>{
        it('should return the role of the Intern entered by the user', () => {
            let testIntern = new Intern('testName', 'testID', 'testEmail', 'testSchool')
            let expectedResult = 'Intern'
            let result = testIntern.getRole()
            expect(result).toEqual(expectedResult)
        })
    })
})