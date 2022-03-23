// Required Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to the Professional README Generator")
console.log("Answer the following qeustions to generate a fantastic README for your precious project!")

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project here:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Type your installation instruction here:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Type your usage instruction here:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidlines?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Type your test instructions here:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
      type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
          name: 'email',
          message: 'What is your email?',
        },

  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    });
};

init();