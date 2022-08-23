// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Derek', 30, 'derek.kilgore@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role of employee', () => {
    const manager = new Manager('Derek', 30, 'derek.kilgore@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 