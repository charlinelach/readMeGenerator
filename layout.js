function licenseType(license) {
    if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license == "GNU GPLv3") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license == "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else (license == "NONE") {
        return ``
    }
}

function layout(data) {
    return `# ${data.title}`

// licenseType(data.license);

## Description
${data.description}

\`\`\`
Deployed at: ${data.deploy}
\`\`\`
Repository: ${data.repo}
\`\`\`

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)


#[Deployment]

##[Installation]

For installation, please complete the following:

##[Usage]

![Screenshot/video](location)

##[Contributors]

##[Testing]

##[License]

##[Questions]
If you have further questions, open an issue or email me at ${data.email}.
`;
}

module.exports = layout;