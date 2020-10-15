function licenseType(license) {
    if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license == "GNU GPLv3") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license == "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license == "NONE") {
        return ``
    }
}

function layout(data) {
    return `# ${data.title}

licenseType();

## Description
${data.description}

\`\`\`
Deployed at: ${data.deploy}
Repository: ${data.repo}
\`\`\`

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)


# Deployment

## Installation

For installation, please complete the following:

## Usage
To utilize the application, users ${data.usage}

![${data.wrongName}](${data.example})

## Contributors
The following contributors have helped me today: ${data.contributors}

## Testing
For this repository the follodawing testing has been done: ${data.test}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have further questions: <br>
* View my GitHub: [${data.gitHub}](https://github.com/${data.gitHub}/)
* Email me at ${data.email}
* Or ${data.questions}
`;
}

module.exports = layout;