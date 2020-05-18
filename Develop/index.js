const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'author',
        message: 'Enter your name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter github username! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the project title! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the description! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage information! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines! (required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter testing instructions! (required)');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter license:',
        choices: ['Apache', '2-Clause BSD', '3-Clause BSD', 'MIT', 'GNU GPL v2', 'GNU GPL v3', 'Mozilla Public License 2.0'],
        when: ({ confirmLicense }) => confirmLicense
    }
]; 

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'Markdown file has been generated!'
            })
        })
    })
}

// function to initialize program
function init() {
    return inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
            return generateMarkdown(answers)
        })
        .then(templateData => {
            writeToFile('./dist/README.md', templateData)
            console.log('---------------------------');
            console.log('Markdown file has been generated in Develop/dist.')
        })
};

// function call to initialize program
init();
