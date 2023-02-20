// takes writeFileSync from the fs module
const {writeFileSync} = require('fs')
const Manager = require('../lib/manager')

// function to generate team HTML page using the data that is passed through
function generateHTML(res) {
writeFileSync(`./index.html`, `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>Team Profile Generator</title>
  </head>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 bg-danger">
          <h1 class="text-center text-black">The Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row m-5 ">
        <div class="row col-12 d-inline-flex justify-content-center"></div>
  `)
// loops through pased through array and goes through each role
  for (const employee of res) {
    if (employee.confirmManager === "Manager") {
        console.log(employee)
      writeFileSync(`./index.html`, `
      <div class="card m-1">
      <div class="card-header bg-info text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle mb-2 text-dark">Manager</h3>
      </div>
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item"><a href = "mailto: ${employee.email}">Email: ${employee.email}</a></li>
        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
      </ul>
  </div>
  `, {flag: 'a'})
      } 
    else if (employee.confirmIntern === "Intern") {
      console.log(employee)
    writeFileSync(`./index.html`, `
    <div class="card m-1">
    <div class="card-header bg-info text-white">
      <h2 class="card-title">${employee.name}</h2>
      <h3 class="card-subtitle mb-2 text-dark">Intern</h3>
    </div>
</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item"><a href = "mailto: ${employee.email}">Email: ${employee.email}</a></li>
      <li class="list-group-item">School: ${employee.school}</li>
    </ul>
</div>
`, {flag: 'a'})
    } 
    else  if (employee.confirmEngineer === "Engineer") {
        console.log(employee)
      writeFileSync(`./index.html`, `
      <div class="card m-1">
      <div class="card-header bg-info text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle mb-2 text-dark">Engineer</h3>
      </div>
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item"><a href = "mailto: ${employee.email}">Email: ${employee.email}</a></li>
        <li class="list-group-item"><a href="${employee.github}">Github: ${employee.github}</a></li>
      </ul>
  </div>
  `, {flag: 'a'})
    } 
  }
}

// exports generateHTML function from module
module.exports = generateHTML; 
