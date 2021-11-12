// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else {
    return 'N/A'
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } if (license === 'Boost'){
    return 'https://www.boost.org/LICENSE_1_0.txt'
  } else {
    return 'N/A'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return 'Apache'
  } if (license === 'MIT') {
    return 'MIT'
  } if (license === 'Boost') {
    return 'Boost'
  } else {
    return 'N/A'
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}
\n
${renderLicenseBadge(data.license)} [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
\n

## Description
${data.description}\n
 -${data.whybuild}\n
 -${data.problem}<\n
 -${data.learn}\n
\n
## Table of Contents

[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Credits](#credits)\n
[Contribute](#contribute)\n
[Testing](#testing)\n
[Questions](#questions)\n
\n
## Installation
${data.installation}\n
\n
## Usage
${data.usage}\n
\n
## License
This application is utilizing the ${renderLicenseSection(data.license)} license.\n
For more information on the ${renderLicenseSection(data.license)} license, click on this link: ${renderLicenseLink(data.license)}.\n
\n
## Credits
Big thank you to ${data.creditNames} for helping with the project!\n
A few tools used on this project were: ${data.creditTools}\n
\n
## Contribute
${data.contribute}\n
\n
## Testing
${data.testing}\n
\n
## Questions
For any questions or suggestions please contact me through the following:\n
Email: ${data.email}\n
GitHub profile: https://github.com/${data.github}\n
`;
}

module.exports = generateMarkdown;
