
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const layout = require("./layout");

const questions = [
    {
        type: "input",
        name: "userInput",
        message: "What is your username on GitHub?"
    }, {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }, {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, {
        type: "input",
        name: "description",
        message: "Describe your repository/project."
    }, {
        type: "input",
        name: "installation",
        message: "Provide installation instructions (step-by-step), if applicable."
    }, {
        type: "input",
        name: "usage",
        message: "Provide usage instructions and examples for use."
    }, {
        type: "input",
        name: "contributors",
        message: "Provide the names of any contributors, if applicable."
    }, {
        type: "input",
        name: "test",
        message: "If applicable, provide any tests completed for the application."
    }, {
        type: "list",
        name: "license",
        message: "Does your project have any of the following applicable licenses?",
        choices: ["NONE", "MIT", "GNU GPLv3", "Apache 2.0", "The Unlicense"]
    }, {
        type: "input",
        name: "questions",
        message: "How should users reach out to you if they have additional questions?"
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    gather.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Producing your README...");
            writeToFile("README.md", layout({ ...inquirerResponses }));
        })
}

init();
