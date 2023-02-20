const Intern = require("../lib/Intern.js");

test("Verifies a intern object was created", () => {
  const intern = new Intern("Michael DiMartino", 20005, "mdimartino@atla.edu", "ATLA Coding Bootcamp")
  
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})