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
        {
          type: "list",
          name: "license",
          choices: [
              "MIT License",
              "Apache 2.0 License",
              "Boost Software License 1.0",
              "Eclipse Public License 1.0",
              "Mozilla Public License 2.0",
              "The Artistic License 2.0"
          ]
      }
    ])
.then((data) => {

  fs.writeFile('README.md' , generateMarkdown(JSON.stringify(data)), (err) =>
      err ? console.log(err) : console.log('Success!'))
});
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
