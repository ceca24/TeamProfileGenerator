const Employee = require("../lib/Employee.js");

test("Verifies a employee object was created", () => {
  const employee = new Employee("Junji Ito", 2552, "junji_ito@uzumaki.com")
  
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})
