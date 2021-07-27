// Import employee constructor 
const Employee = require('../lib/Employee');

// Create employee object 
test('creates an employee object', () => {
    const employee = new Employee('Cherry', 88, 'cherry@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// GET id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Cherry', 88, 'cherry@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// GET id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Cherry', 88, 'cherry@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// GET emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Cherry', 88, 'cherry@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// GET role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Cherry', 88, 'cherry@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

