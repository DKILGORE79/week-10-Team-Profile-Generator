// using Intern constructor 
const Intern = require('../lib/Intern.js');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Derek', 30, 'derek.kilgore@gmail.com', 'Avila University');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school 
test('gets employee school', () => {
    const intern = new Intern('Derek', 30, 'derek.kilgore@gmail.com', 'Avila University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role 
test('gets role of employee', () => {
    const intern = new Intern('Derek', 30, 'derek.kilgore@gmail.com.com', 'Avila University');

    expect(intern.getRole()).toEqual("Intern");
}); 