// function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = "";

  if (data.tableOfContents) {
    tableOfContents = `## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Get In Touch](#Get-In-Touch)
`;
  }

  let badge = "";
  // Switch statement to add license badge to readme depending on what the user selects
  switch (data.license) {
      case "MIT":
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
      case "Apache":
          badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
          break;
      case "GNU":
          badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          break;
      default:
          badge = "";
  }

  return `
# ${data.title}


${tableOfContents}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license. Click the below badge for further information.

${badge}

## Contribution
${data.contribution}

## Test
${data.test}

## Get In Touch
For any questions relating to the project, please feel free to get in touch with me via email at: [${data.questions}](mailto:${data.questions})
Feel free to also check out my GitHub profile and follow along at: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
