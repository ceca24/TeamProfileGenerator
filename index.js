const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const buildOfficeArr = [];

const questions = [

    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the employee role?',
                choices: ['Manager', 'Engineer', 'Intern', 'Done']
            }
        ]).then(function (data) {
            if (data.role === 'Manager') {
                addManager();
            } else if (data.role === 'Engineer') {
                addEngineer();
            } else if (data.role === 'Intern') {
                addIntern();
            } else {
                console.log('Done');
                console.log(buildOfficeArr);
                const html = generateHTML(buildOfficeArr);
                fs.writeFile('./dist/index.html', html, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    },
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager office number?'
            }
        ]).then(function (data) {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            buildOfficeArr.push(manager);
            addEmployee();
        });
    },
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer github?'
            },
        ]).then(function (data) {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            buildOfficeArr.push(engineer);
            addEmployee();
        });
    },
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern school?'
            },
        ]).then(function (data) {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            buildOfficeArr.push(intern);
            addEmployee();
        });
    },
];

function buildWebPage (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("success")
    });
}

function init(){
    return inquirer.prompt(questions).then((htmlInfo) => {
        writeToFile("./dist/index.html", generateHTML(htmlInfo));
    });
}

init()
