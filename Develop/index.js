// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
        name: 'installtion',
        message: 'Please explain how to install your project',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must describe ')
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
    const { title, description, installation} = projectData;

    return`

    # ${title}
    
    --
    `;
}

const promptUser = () => {
    return inquirer.prompt(questions)
}; 

promptUser()
.then((projectData) => {
    return deconstructInput(projectData);
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
