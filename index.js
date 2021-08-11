//requiring specific npm package inquirer 
const inquirer = require('inquirer');
//requiring node standard library for writing file
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
            message: 'Enter Project description:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions (use commas for numbered list):',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter Project usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter Project contribution guidelines:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter Project test information:',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
          type: "list",
          name: "license",
          choices: [
              "MIT License",
              "Attribution-NonCommercial 4.0 International",
              "Eclipse Public License 1.0",
              "IBM Public License Version 1.0",
              "Mozilla Public License 2.0"
          ]
      }
    ])
    .then((res) => {
        console.log("Generating README.md...");
        createREADMEFile(res);
        
    })
    .catch((err) => {
        console.log(err);
    })

    function createREADMEFile(input) {
        let readmeTitle;
        let readmeDescription;
        const descriptionHeader = "## Description";
        let tableOfContents;
        const TOCHeader = "## Table of Contents";
        let installArr;
        const installHeader = "## Installation";
        let readmeUsage;
        const usageHeader = "## Usage";
        let readmeContribution;
        const contributionHeader = "## Contribution";
        let readmeTest;
        const testingHeader = "## Tests";
        let readmeLicence = input.license;
        const licenseHeader = "## License";
        let readmeQuestions;
        const questionsHeader = "## Questions";
        let completeREADME = [];
        
        //writing title section from user input
        if (input.title == '') {
            readmeTitle = '# TITLE';
        } else {
            readmeTitle = `# ${input.title}`;
        }
        completeREADME.push(readmeTitle);

        //placing badge license
        let badge = `![](https://img.shields.io/badge/license-${readmeLicence.replace(/ /g, "%20")}-blue?style=flat-square)`;
        completeREADME.push(badge);

        // writing description section from user input
        if (input.description == '') {
            readmeDescription = `${descriptionHeader}\n Enter project description here.`;
        } else {
            readmeDescription = `${descriptionHeader}\n${input.description}`;
        }
        completeREADME.push(readmeDescription);

        //writing the Table of Contents (TOC)
        tableOfContents = `${TOCHeader}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
        completeREADME.push(tableOfContents);

        //writing the install from user input
        completeREADME.push(`${installHeader}`);
        
        installArr = input.install.split(',').map(item => {
            return `${item.trim()}`;
        });
        
        for (var i = 0; i < installArr.length; i++) {
            completeREADME.push(`${i + 1}. ${installArr[i]}`);
        }
        
        //writing usage from user input
        if (input.usage == '') {
            readmeUsage = `\n${usageHeader}\n Enter project usage here.`;
        } else {
            readmeUsage = `\n${usageHeader}\n${input.usage}`;
        }
        completeREADME.push(readmeUsage);
        
        //writing the Contributing from user input
        if (input.contribution == '') {
            readmeContribution = `\n${contributionHeader}\n Enter project contribution.`;
        } else {
            readmeContribution = `\n${contributionHeader}\n${input.contribution}`;
        }
        completeREADME.push(readmeContribution);

        //writing test from user input
            if (input.testing == '') {
                readmeTest = `\n${testingHeader}\n Enter project testing information here.`;
            } else {
                readmeTest = `\n${testingHeader}\n${input.test}`;
            }
            completeREADME.push(readmeTest);
        
        //writing questions section from user input of GitHub and email
        readmeQuestions = `\n${questionsHeader}\nFor questions about this project, please see my GitHub at [${input.gitHub}](https://github.com/${input.gitHub}), or reach out by email at ${input.email}.`;
        completeREADME.push(readmeQuestions);
               
        //License info
        readmeLicence = `\n${licenseHeader}\nLicensed under ${input.license}.`;
        completeREADME.push(readmeLicence);
            
        //putting together README from user inputs
        const README = completeREADME.join('\n');
         
        //node standard library File System to created file READMEexample.md
        fs.writeFile("READMEexample.md", README, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("README file successfully created!");
            }
        });
    }