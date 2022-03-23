function generateMarkdown(data) {
    return `# ${data.name}
    ## License:
    
   ## Table of Contents
    1. [Description](#Description)
    2. [Installation](#Installation)
    3. [Usage](#Usage)
    4. [Contribution](#Contribution)
    5. [Instructions](#Instructions)
    6. [License](#License)
    7. [Github](#Github)
    8. [Email](#Email)  
    
    ## Description:
    ${data.description}
    ## Installation:
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution
    ${data.contribution}
    ## Instructions
    ${data.instructions}
    ## License
    ${data.license}
    ## GitHub
    - Github: [GitHub](https://github.com/${data.github})
    ## Email
    - Contact at: [Email](mailto:${data.email})
    
    
    
    
    
    `
}
module.exports = generateMarkdown;