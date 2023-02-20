const Manager = require("../lib/manager.js");

test("Verifies a manager object was created", () => {
  const manager = new Manager("Junji Ito", 2552, "junji_ito@uzumaki.com", 1);
  
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));

})