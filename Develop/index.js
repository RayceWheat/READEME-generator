// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must enter a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your project',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must describe how to install your project.')
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must explain how to you your project.')
                return false;
            }

        }
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'Apache license 2.0',
            'MIT License',
            'GNU General Public License v3.0',
        ],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must select a license')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please input contribution guide lines',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please input contribution guide lines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please explain your tests',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please input test explanation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please input your Github username for potential questions',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must input your Github username');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input an email to be contacted',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must input your email');
                return false;
            }
        }
    }
];
/*
Title of project
Sections for: 
Descipriton
Table of contents 
Installtion
Usage
License
Contributing
Test 
Questions
*/

const deconstructInput = (projectData) => {
    console.log(projectData);
    const { title, description, installation,  usage, contribution, license, github, email} = projectData;

    console.log(license);

return`# ${title}

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)

## Installation 
${installation}

## Usage
${usage}

## Contribution
${contribution}

## License
${license}

## Questions
Questions may be directred at either ${github} or ${email}. 
`;
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/README.md', fileContent, err => {
            // if there's an error reject promise and send error to the Promise's 'catch'
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promse
                return;
            }

            // if everything went well, resolve the Promise
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const promptUser = () => {
    return inquirer.prompt(questions)
}; 

promptUser()
.then((projectData) => {
    return deconstructInput(projectData);
})
.then(markdownData => {
    return writeFile(markdownData);
});


/*

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/