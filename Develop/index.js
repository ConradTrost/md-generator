const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter name! (required)');
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
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

}

// function call to initialize program
init();
