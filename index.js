// import inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

//import classes
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter Team Manager's name: ",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "Enter manager's employee ID: ",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Enter manager's email address: ",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Enter manager's office phone number: ",
            name: 'managerPhone',
        },
        {
            type: 'list',
            message: "What would you like to do next?",
            choices: ['add Engineer', 'add Intern', 'finish building team'],
            name: 'nextChoice'
        },
    ])
    .then ((answers) => {
        if(answers.nextChoice == 'add Engineer') {
            console.log(`${answers.managerName} chose to add an Engineer`);
        } else if(answers.nextChoice == 'add Intern') {
            console.log(`${answers.managerName} chose to add an Intern!`);
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
