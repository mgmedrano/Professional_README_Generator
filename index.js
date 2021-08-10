// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of the project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions (separate using commas):',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for the project:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines for the project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test information for the project',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username:',
        },
    ])
.then((data) => {

  fs.writeFile('ReadMe.md' , generateMarkdown(JSON.stringify(data)), (err) =>
      err ? console.log(err) : console.log('Success!'))
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
