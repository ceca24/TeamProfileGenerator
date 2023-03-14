const fs = require("fs");
const inquirer = require("inquirer");
const buildHtml = require("./src/generateHTML")


const { Employee } = require("./lib/employee");
const { Engineer } = require("./lib/engineer");
const { Intern } = require("./lib/intern");
const { Manager } = require("./lib/manager");
const employeeArray = [];

const newEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your job title?",
        name: "title",
        choices: ["Employee", "Engineer", "Manager", "Intern", "None"],
      }
    ])
    .then((response) => {
      console.log(response);
      if (response.title === "Employee") {
        createEmployee();
      }
      else if (response.title === "Engineer"){
        createEngineer();
      }
      else if (response.title === "Intern"){
        createIntern();

      }
      else if (response.title === "Manager"){
        createManager();
      }
      else{fs.writeFileSync("sample.html", buildHtml(employeeArray), (err) =>
      err ? console.log(err) : console.log("Successfully created HTML file!"))}
    })
};


newEmployee();


const createEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])
    .then((response) => {
      console.log(response);
      const employeeInstance = new Employee (
        response.name,
        response.id,
        response.email,
      );
      employeeArray.push(employeeInstance);
      console.log(employeeArray);
      newEmployee()
    });
};


const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the link to your personal GitHub?",
        name: "github",
      },
    ])
    .then((response) => {
      console.log(response);
      const engineerInstance = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employeeArray.push(engineerInstance);
      console.log(employeeArray);
      newEmployee()
    });
};

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      console.log(response);
      const managerInstance = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
      );
      employeeArray.push(managerInstance);
      console.log(employeeArray);
      newEmployee()
    });
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school are you currently attending?",
        name: "school",
      },
    ])
    .then((response) => {
      console.log(response);
      const internInstance = new Intern (
        response.name,
        response.id,
        response.email,
        response.school,
      );
      employeeArray.push(internInstance);
      console.log(employeeArray);
      newEmployee()
    });
};


function jobTitle(title) {
  if (title === "Intern") {
    title = '![Title: Intern](<img src="/src/user-graduate-solid.svg">)';
  } else if (title === "Engineer") {
    title = '![Title: Engineer](<img src="/src/user-gear-solid.svg">)';
  } else if (title === "Manager") {
    title = '![Title: Manager](<img src="/src/user-tie-solid.svg">)';
  } else {
    title = '![Title: Employee](<img src="/src/user-regular.svg">)';
  }
  return title;}