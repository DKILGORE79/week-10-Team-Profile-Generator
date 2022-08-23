// using Employee constructor
const Employee = require("../lib/Employee.js");

// gets id from getId()  - https://www.pluralsight.com/guides/introduction-to-test-driven-development-in-javascript
// https://youtu.be/y8TcPr73Bwo
test("gets employee name", () => {
  const employee = new Employee("Derek", 30, "Derek.kilgore@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets id 
test("gets employee ID", () => {
  const employee = new Employee("Derek", 30, "Derek.kilgore@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails 
test("gets employee email", () => {
  const employee = new Employee("Derek", 30, "Derek.kilgore@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// creates employee object
test("creates an employee object", () => {
  const employee = new Employee("Derek", 30, "Derek.kilgore@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// gets role 
test("gets role of employee", () => {
  const employee = new Employee("Derek", 30, "Derek.kilgore@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
