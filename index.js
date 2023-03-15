const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/generateHTML');

const newEmployee = [];

const questions = async () => {
    const responses = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ]);

    if (responses.role === 'Manager') {
        const manager = await inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?',
            },
        ]);
        const newManager = new Manager(responses.name, responses.id, responses.email, manager.officeNumber);
        newEmployee.push(newManager);
    } else if (responses.role === 'Engineer') {
        const engineer = await inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is the github username?',
            },
        ]);
        const newEngineer = new Engineer(responses.name, responses.id, responses.email, engineer.github);
        newEmployee.push(newEngineer);
    } else if (responses.role === 'Intern') {    
        const intern = await inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the school name?',
            },
        ]);
        const newIntern = new Intern(responses.name, responses.id, responses.email, intern.school);
        newEmployee.push(newIntern);
    };
};

const addEmployee = async () => {
    await questions();

    const addEmployee = await inquirer.prompt([
        {
            name: 'addEmployee',
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
        },
    ]);

    if (addEmployee.addEmployee === 'Yes') {
        await addEmployee();
    } else {
        const html = generateTeam(newEmployee);
        fs.writeFile('./index.html', html, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
};

addEmployee();
