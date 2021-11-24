const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    describe('getGithub', () =>{
        it('should return the github username of the Engineer entered by the user', () => {
            let testEngineer = new Engineer('testName', 'testID', 'testEmail', 'testGithub')
            let expectedResult = 'testGithub'
            let result = testEngineer.getGitHub()
            expect(result).toEqual(expectedResult)
        })
    })
    describe('getRole', () =>{
        it('should return the role of the Engineer entered by the user', () => {
            let testEngineer = new Engineer('testName', 'testID', 'testEmail', 'testGithub')
            let expectedResult = 'Engineer'
            let result = testEngineer.getRole()
            expect(result).toEqual(expectedResult)
        })
    })
})