// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a short description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'whybuild',
    },
    {
        type: 'input',
        message: 'What problem does this project address?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What did you learn working on this project',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'What are the steps users should follow to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage examples and instructions for application use:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license was you used for this project?',
        name: 'license',
        choices: ['Apache', 'MIT', 'Boost'],
    },
    {
        type: 'input',
        message: 'What tools did you use to create this project (bootstrap, npm, apis)?',
        name: 'creditTools',
    },
    {
        type: 'input',
        message: 'Did anyone help you create this project?',
        name: 'creditNames',
    },
    {
        type: 'input',
        message: 'What are your contributing guidelines?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What are your testing instructions?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
    },
    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('Error', err)
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        // .then (function(answers){
        //     console.log('answers', answers)
        //     fs.appendFile('index.js', JSON.stringify(answers), function*(err) {
        //     console.log('err',err)
        //     });

        // });
        .then (function(answers){
            console.log('answers', answers)
            var testReadme = generateMarkdown(answers)
            // console.log('readme',testReadme)
            writeToFile('./exported-file/README.md', testReadme)



        });           
    

    

}


// var testReadme = generateMarkdown(answers)
// console.log('readme',testReadme)
// writeToFile('README.md', testReadme)
// Function call to initialize app

init();

