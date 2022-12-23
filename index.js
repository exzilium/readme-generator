// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// title of project, description, table of contents(?), installation, usage, license, contributing, tests, questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "desc",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "How can the app be used?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: ["A", "B", "C"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Would you like to list any contributors?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can the app be tested?",
  },
  {
    type: "input",
    name: "github",
    message: "Provide a github username as a good contact for questions about the app.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide an email address for that contact.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
