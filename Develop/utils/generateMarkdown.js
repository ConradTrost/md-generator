// Make generator using node "inquirer"
// Guide to professional README located in root (readme-guide.md) or https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md

// array of questions for user
// Questions: 
// Section {TITLE}  ----->  Self explanatory
// Sections {Description, Installation, Usage, Contributing, and Tests}  ----->  Description, installation instructions, usage info, contribution guidelines, and test instructions
// Section {LICENSE}    ----->  Option to choose license and then the badge is added from https://shield.io
// Section {QUESTIONS}  ----->  Github username (link to profile), Email address (w/ instructions on how to reach person)
// Table of contents with links to the sections


// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ### Developed by ${data.author}

  ### Table of Contents:

  **[Description](#description)**<br>
  **[Installation Instructions](#installation-instructions)**<br>
  **[Usage Instructions](#usage-instructions)**<br>
  **[Contributions](#contributions)**<br>
  **[Test Instructions](#test-instructions)**<br>
  **[License](#license)**<br>
  **[Questions](#questions)**<br>
  **[Next Steps, Credits, Feedback, License](#next-steps)**<br>

  ## Description
  #### ${data.description}

  ## Installation Instructions
  #### ${data.install}

  ## Usage Instructions 
  #### ${data.usage}

  ## Contributions
  #### ${data.contribution}

  ## Test Instructions
  #### ${data.test}

  ## License
  #### ${data.license}

  ## Questions

  ### Find me on [Github](https://github.io/${data.github})
  ### Email me with questions at ${data.email}
`;
}

module.exports = generateMarkdown;