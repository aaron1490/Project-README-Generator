const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// questions are then used to generate a markdown readme file for the user's project
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },

  {
    type: "confirm",
    name: "tableOfContents",
    message: "Would you like to include a table of contents for your project?",
    default: true  
  },

  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },

  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },

  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "None"],
  },

  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
  },

  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
  },

  {
    type: "input",
    name: "questions",
    message: "Please provide your email address.",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub name.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then ((data) => {
    writeToFile("./testing-folder/README-TEST.md", generateMarkdown(data)); // Writesthe newly generated readme file to the testing-folder
  })
}

// function call to initialize program
init();
