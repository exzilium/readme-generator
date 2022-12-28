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
        type: "input",
        name: "currentuser",
        message: "What is the Github username for the user who owns this repo?",
      },
      {
        type: "input",
        name: "currentrepo",
        message: "What is the name of this repo?",
      },
      {
        type: "list",
        name: "license",
        message: "What is the license used for this repo?",
        choices: [
          "N/A",
          "Apache License 2.0",
          "Boost Software License 1.0",
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "MIT License",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
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
      // License badge can be autodetected using https://img.shields.io/github/license/<Github-Username>/<Repository>
      readmeContent = `# ${response.title}

## Description

![license](https://img.shields.io/github/license/${response.currentuser}/${response.currentrepo})
<br>
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

Send any questions to this contact:
<br>
[Github: ${response.github}](https://github.com/${response.github})
<br>
[Email: ${response.email}](mailto:${response.email})

## License

${response.license}

## Badges

![license](https://img.shields.io/github/license/${response.currentuser}/${response.currentrepo})

## How to Contribute

${response.contribute}

## Tests

${response.test}`;
      // write file using template
      fs.writeFile("new_README.md", readmeContent, (err) =>
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
