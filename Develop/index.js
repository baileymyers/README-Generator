const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description"
    },
    {
        type: "list",
        message: "Please select a license for your project",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "depCommand"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "testCommand"
    },
    {
        type: "input",
        message: "What does the user need to know regarding the usage of this project?",
        name: "usage"
    },
    {
        type: "confirm",
        message: "Is your project open source?",
        name: "confirmOS"
    },
    {
        type: "confirm",
        message: "Would you like to use the contributor covenant for contributor rules?",
        name: "contribCovenant"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the project?",
        name: "openSourceMessage"
    },
    {
        type: "confirm",
        message: "Would you like to add a message to authorized authors on how to contribute?",
        name: "confirmContribMessage"
    },
    {
        type: "input",
        message: "What does the authorized user need to know about contributing to the project?",
        name: "contribMessage"
    }
]).then(response => {
    let { username, email, name, projectName, description, license, depCommand, testCommand, usage, confirmOS, contribCovenant, openSourceMessage, confirmContribMessage, contribMessage } = response;

    const contribCovenantMessage = contribCovenant ? `This is an open source application and welcome for contribution. If you would like to contribute, you can fork my repo and submit any pull request for any features you would like added.    
    Contributions are protected by the contributor covenant V2.0. If you have any new features you would like to see added or want to report abuse please contact me at ${email} 
    Click [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) for more information regarding contributor covenant V2.0.`;

    if (!confirmOS) {
        confirmOS = " "
    }
    if (!openSourceMessage) {
        openSourceMessage = " "
    }

    const readme = `<br />
    <p align="center">
      <a href="https://github.com/${username}/${projectName}">
      </a>
    
      <h3 align="center">${projectName}</h3>
    
      <p align="center">
      ${description}
        <br />
        <a href="https://github.com/${username}/${projectName}"><strong>Explore the docs »</strong></a>
        <br />
        <br />
        <a href="https://github.com/${username}/${projectName}">View Demo</a>
        ·
        <a href="https://github.com/${username}/${projectName}/issues">Report Bug</a>
        ·
        <a href="https://github.com/${username}/${projectName}/issues">Request Feature</a>
      </p>
    </p>
    
    
    
    <!-- TABLE OF CONTENTS -->
    ## Table of Contents
    
    * [About the Project](#about-the-project)
      * [Built With](#built-with)
    * [Getting Started](#getting-started)
      * [Prerequisites](#prerequisites)
      * [Installation](#installation)
    * [Usage](#usage)
    * [Roadmap](#roadmap)
    * [Contributing](#contributing)
    * [License](#license)
    * [Contact](#contact)
    * [Acknowledgements](#acknowledgements)

    ## About The Project
    
    [![Product Name Screen Shot][product-screenshot]](https://example.com)
    
    <p>${description}</p>
    
    ### Built With
    
    * []()
    * []()
    * []()
    
    
    
    <!-- GETTING STARTED -->
    ## Getting Started
    
    To get a local copy up and running follow these simple steps.

    ### Installation
    
    ${depCommand}
    
 
    ## Usage
    
    ${usage}
    

    ## Roadmap
    
    See the [open issues](https://github.com/${username}/${projectName}/issues) for a list of proposed features (and known issues).
    
    
    ## Contributing
    
    ${openSourceMessage}
    ${contribMessage}
    

    ## Tests

    ${testCommand}


    ## License
    
    Distributed under the ${license}. See LICENSE for more information.
    

    ## Contact
    
    ${name} - ${email}
    
    Project Link: [https://github.com/${username}/${projectName}](https://github.com/${username}/${projectName})
    
    
    
    <!-- ACKNOWLEDGEMENTS -->
    ## Acknowledgements
    
    * []()
    * []()
    * []()`
})

// array of questions for user
const questions = [
    {
        question: ""
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
