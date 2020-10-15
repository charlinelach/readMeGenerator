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
    return `# ${data.title}

licenseType(data.license);

## Description
${data.description}

<br>
Deployed at: ${data.deploy}
<br>
Repository: ${data.repo}


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
To utilize the application, users ${data.usage}
![${altName}](${example})

##[Contributors]
The following contributors have helped me today: ${data.contributors}

##[Testing]
For this repository the following testing has been done: ${test}

##[License]
This project is licensed under the ${license} license.

##[Questions]
If you have further questions, email me at ${data.email} or ${data.questions}.
`;
}

module.exports = layout;