// read game.js from week 10 mini project
// create class called BuildTeam
// methods within BuildTeam can invoke inquirer/prompts

// import inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

//import classes
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

//inquirer questions
const manangerQuestions = [
    {
        type: 'input',
        message: "Please enter Team Manager's name: ",
        name: 'mgrName',
    },
    {
        type: 'input',
        message: "Enter manager's employee ID: ",
        name: 'mgrID',
    },
    {
        type: 'input',
        message: "Enter manager's email address: ",
        name: 'mgrEmail',
    },
    {
        type: 'input',
        message: "Enter manager's office phone number: ",
        name: 'mgrPhone',
    },
    {
        type: 'list',
        message: "What would you like to do next?",
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'nextChoice'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter Engineer's name: ",
        name: 'engName',
    },
    {
        type: 'input',
        message: "Enter Engineer's employee ID: ",
        name: 'engID',
    },
    {
        type: 'input',
        message: "Enter manager's email address: ",
        name: 'engEmail',
    },
    {
        type: 'input',
        message: "Enter Engineer's Github username: ",
        name: 'engGithub',
    },
    {
        type: 'list',
        message: "What would you like to do next?",
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'nextChoice'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "Please enter Intern's name: ",
        name: 'intName',
    },
    {
        type: 'input',
        message: "Enter Intern's employee ID: ",
        name: 'intID',
    },
    {
        type: 'input',
        message: "Enter Intern's email address: ",
        name: 'intEmail',
    },
    {
        type: 'input',
        message: "Enter the school Intern attends: ",
        name: 'intSchool',
    },
    {
        type: 'list',
        message: "What would you like to do next?",
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'nextChoice'
    },
]

// const nextQuestion = [
//     {
//         type: 'list',
//         message: "What would you like to do next?",
//         choices: ['add Engineer', 'add Intern', 'finish building team'],
//         name: 'nextChoice'
//     },
// ]

inquirer
    .prompt(manangerQuestions)
    .then ((answers) => {
        if(answers.nextChoice == 'add Engineer') {
            console.log(`${answers.mgrName} chose to add an Engineer`);
        } else if(answers.nextChoice == 'add Intern') {
            console.log(`${answers.mgrName} chose to add an Intern!`);
        } else {
            // (answers) => {
            //     const htmlPageContent = generateHTML(answers);
            //     fs.writeFile('index.html', htmlPageContent, (err) => 
            //         err ? console.log(err) : console.log('Successfully generated index.html')
            //     )
            // }
            return
        }
    })
