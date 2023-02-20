// required modules
const inquirer = require("inquirer");
const fs = require("fs");
// links to JS file to generate HTML
const generateHTML = require("./src/generateHTML.js")
// for jest tests
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")

// init array to hold role objects
const officeArr = []

// inquirer questions for manager role
const managerRole = [
  {
      name: 'role',
      type: 'confirm',
      message: 'Would you like to create a new Team Profile?',
  },  
  {
      name: 'confirmManager',
      type: 'list',
      message: "Press enter to confirm",
      choices: [
        'Manager'
    ]
  },
  {
      name: 'name',
      type: 'input',
      message: 'Enter the name of the manager:',
  },
  {
      name: 'id',
      type: 'input',
      message: 'Enter your Employee ID',
  },
  {
      name: 'email',
      type: 'input',
      message: 'Enter your email address',
  },
  {
      name: 'officeNumber',
      type: 'input',
      message: 'Enter your office number',
  },
  {
      name: 'continue',
      type: 'list',
      choices: [
          'Add Engineer',
          'Add Intern',
          'Exit'
      ],
      message: 'Do you want to continue?'
  },
];

// inquirer questions for engineer role
const engineerRole = [
  {
    name: 'confirmEngineer',
    type: 'list',
    message: "Press enter to confirm",
    choices: [
      'Engineer'
  ]
  },
  {
      name: 'name',
      type: 'input',
      message: 'Enter the name of the new engineer',
  },
  {
      name: 'id',
      type: 'input',
      message: 'Enter the Employee ID of the new engineer',
  },
  {
      name: 'email',
      type: 'input',
      message: 'Enter the email address of the new engineer',
  },
  {
      name: 'github',
      type: 'input',
      message: 'Enter the GitHub username of the new engineer',
  },
  {
      name: 'continue',
      type: 'list',
      choices: [
          'Add Engineer',
          'Add Intern',
          'Exit'
      ],
      message: 'Do you want to continue?'
  },
];

// inquirer questions for intern role
const internRole = [
  {
    name: 'confirmIntern',
    type: 'list',
    message: "Press enter to confirm",
    choices: [
      'Intern'
  ]
  },
  {
      name: 'name',
      type: 'input',
      message: 'Enter the name of the new intern',
  },
  {
      name: 'id',
      type: 'input',
      message: 'Enter the Employee ID of the new intern',
  },
  {
      name: 'email',
      type: 'input',
      message: 'Enter the email address of the new intern',
  },
  {
      name: 'school',
      type: 'input',
      message: 'Enter the current school for the new intern',
  },
  {
      name: 'continue',
      type: 'list',
      choices: [
          'Add Engineer',
          'Add Intern',
          'Exit'
      ],
      message: 'Do you want to continue?',
  },
];

// main function takes previously defined role inquirer questions as a paramter
function init(rolesArr) {
 inquirer.prompt(rolesArr)
  .then((role) => {
    // pushes pushes role to office array
    officeArr.push(role);
    // if "Add Engineer" is selected calls init function and passes engineer inquirer questions
    if (role.continue === 'Add Engineer') {
        init(engineerRole);
    // if "Add Intern" is selected calls init function and passes intern inquirer questions
    } else if (role.continue === 'Add Intern') {
        init(internRole);
    } else {
    // passes office array to the generateHTML function
        generateHTML(officeArr);
// used to finish HTML 
fs.writeFileSync(`./index.html`, `
</div>
</body>
</html>`, {flag: 'a'})
    }
})
.catch((err) => console.log(err));
}

// Function call to initialize app
init(managerRole);