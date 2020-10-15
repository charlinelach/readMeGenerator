const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const layout = require("./layout");

const questions = [
    {
        type: "input",
        name: "gitHub",
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
        name: "deploy",
        message: "What is your deployment link?",
        default: "NA"
    }, {
        type: "input",
        name: "repo",
        message: "What is your repository link?",
        default: "NA"
    }, {
        type: "input",
        name: "installation",
        message: "Provide installation instructions (step-by-step).",
        default: "NA"
    }, {
        type: "input",
        name: "usage",
        message: "What is utilization?"
    }, {
        type: "input",
        name: "example",
        message: "Provide the location of a screenshot/example.",
        default: "NA"
    }, {
        type: "input",
        name: "wrongName",
        message: "What would its alt text be?",
        default: "NA"
    }, {
        type: "input",
        name: "contributors",
        message: "Provide the names of any contributors.",
        default: "NA"
    }, {
        type: "input",
        name: "test",
        message: "Provide any tests completed for the application.",
        default: "NA"
    }, {
        type: "list",
        name: "license",
        message: "Which license is a fit with your project?",
        choices: ["NONE", "MIT", "GNU GPLv3", "Apache 2.0"]
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
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Producing your README...");
            writeToFile("README.md", layout({...inquirerResponses}));
            console.log("README complete!")
        })
}

init();
