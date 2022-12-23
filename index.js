// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// function to use inquirer to prompt user response and write them to a README.md file
function writeToFile() {
  inquirer
    // user prompts
    .prompt([
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
        message:
          "Provide a github username as a good contact for questions about the app.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide an email address for that contact.",
      },
    ])

    // wait for responses
    .then((response) => {
      // template for README contents
      readmeContent = `
      # ${response.title}

## Description

${response.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.install}

## Usage

${response.usage}

## Credits

${response.github}
${response.email}

## License

${response.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## How to Contribute

${response.contribute}

## Tests

${response.test}
`;
      // write file using template
      fs.writeFile("README.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Success")
      );
    });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}
// Function call to initialize app
init();
