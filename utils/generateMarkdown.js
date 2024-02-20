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
          badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
          break;
      case "GNU":
          badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          break;
      default:
          badge = "";
  }

  return `
  # ${data.title}
  ${badge}
  ${tableOfContents}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Get In Touch
  For any questions relating to the project, please feel free to get in touch with me at: ${data.questions}
`;
}

module.exports = generateMarkdown;
