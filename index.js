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
    type: "input",
    name: "tableOfContents",
    message: "Please provide a table of contents for your project.",
    default:
      "## Table of Contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribution](#contribution)\n- [Test](#test)\n- [License](#license)\n- [Questions](#questions)",
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
    choices: ["MIT", "Apache", "GNU", "None"],
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
    name: "email",
    message: "Please provide your email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
