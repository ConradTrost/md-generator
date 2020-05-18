function generateBadges(data) {
  let badges = '';
    if (data == 'Apache') {
      badges = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    };
    if (data == '2-Clause BSD') {
      badges = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    };
    if (data == '3-Clause BSD') {
      badges = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    };
    if (data == 'MIT') {
      badges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    };
    if (data == 'Mozilla Public License 2.0') {
      badges = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    };
    if (data == 'GNU GPL v2') {
      badges = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    };
    if (data == 'GNU GPL v3') {
      badges = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } return badges;
};

function generateURL(data) {
  let url = '';
  if (data == 'Apache') {
    url = '(https://opensource.org/licenses/Apache-2.0)'
  };
  if (data == '2-Clause BSD') {
    url = '(https://opensource.org/licenses/BSD-2-Clause)'
  };
  if (data == '3-Clause BSD') {
    url = '(https://opensource.org/licenses/BSD-3-Clause)'
  };
  if (data == 'MIT') {
    url = '(https://opensource.org/licenses/MIT)'
  };
  if (data == 'Mozilla Public License 2.0') {
    url = '(https://opensource.org/licenses/MPL-2.0)'
  };
  if (data == 'GNU GPL v2') {
    url = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  };
  if (data == 'GNU GPL v3') {
    url = '(https://www.gnu.org/licenses/gpl-3.0)'
  } return url;
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${generateBadges(data.license)}
  ### Developed by [**${data.author}**](https://github.com/${data.github})

  ## Description
  #### ${data.description}

  ### Table of Contents:

  **[Description](#description)**<br>
  **[Installation Instructions](#installation-instructions)**<br>
  **[Usage Instructions](#usage-instructions)**<br>
  **[Contributions](#contributions)**<br>
  **[Test Instructions](#test-instructions)**<br>
  **[License](#license)**<br>
  **[Questions](#questions)**<br>

  ## Installation Instructions
  ${data.install}

  ## Usage Instructions 
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## License
  This application is covered under the [${data.license}]${generateURL(data.license)} license.
  Visit the link above to learn more about this license.

  ## Questions

  Find me on [Github](https://github.com/${data.github})
  Email me with questions at ${data.email}
`;
}

module.exports = generateMarkdown;
