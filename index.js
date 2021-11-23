// read game.js from week 10 mini project
// create class called BuildTeam
// methods within BuildTeam can invoke inquirer/prompts
// maybe use get methods in Manager, intern and engineer classes to populate the html file correctly
// construct objects using the imported classes within the inquirer prompts

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

// html templates
const htmlHead = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title> Team </title>
</head>
<body>`

const htmlEnd = 
`</body>
</html>`

const engineerHTML = 
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`

const internHTML = 
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`

const managerHTML = 
`<div class="card w-75">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Button</a>
</div>
</div>`

//empty arrays
let teamData = []
let htmlText = []

function promptManager() {
    inquirer
        .prompt(manangerQuestions)
        // .then ((answers) => ) Store answers into an array to pull from for the html file
        .then(answers => {
            const manager = new Manager(answers.mgrName, answers.mgrID, answers.mgrEmail, answers.mgrPhone)
            console.log(manager)
            teamData.push(manager)
            console.log(teamData)
            if(answers.nextChoice == 'add Engineer') {
                promptEngineer()
            } else if (answers.nextChoice == 'add Intern') {
                promptIntern()
            } else {
                end()
            }
        })
}

function promptEngineer() {
    //console.log(`Adding an engineer next!`);
    inquirer
        .prompt(engineerQuestions)
        .then (answers => {
            const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGithub)
            teamData.push(engineer)
            console.log(teamData)
            if(answers.nextChoice == 'add Engineer') {
                promptEngineer()
            } else if (answers.nextChoice == 'add Intern') {
                promptIntern()
            } else {
                end()
            }
        })
}

function promptIntern() {
    //console.log(`Adding an intern next!`);
    inquirer
        .prompt(internQuestions)
        .then (answers => {
            const intern = new Intern(answers.intName, answers.intID, answers.intEmail, answers.intSchool)
            teamData.push(intern)
            console.log(teamData)
            if(answers.nextChoice == 'add Engineer') {
                promptEngineer()
            } else if (answers.nextChoice == 'add Intern') {
                promptIntern()
            } else {
                end()
            }
        })
}

function end() {
    //function to generate team html file
    //teamData[1].constructor.name gets the title of the object (i.e. Engineer)
    //teamData.length counts each object as 1 for length of array
    //teamData[1].name to get the name element of 2nd object in array
    console.log('\nFinished making team!\n');
    process.exit(0);
}

function generateMgrHTML() {
    
}


promptManager();

// const nextQuestion = [
//     {
//         type: 'list',
//         message: "What would you like to do next?",
//         choices: ['add Engineer', 'add Intern', 'finish building team'],
//         name: 'nextChoice'
//     },
// ]

