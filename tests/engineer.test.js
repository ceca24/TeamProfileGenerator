const Engineer = require("../lib/Engineer.js");

test("Verifies a new Engineer object was created", () => {
  const engineer = new Engineer("Naoko Takeuchi", 19991, "ntakeuchi@sm.com", "https://github.com/SailorTakeuchi")
  
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));

})