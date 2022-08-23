// using Engineer constructor colewallace09
const Engineer = require('../lib/Engineer.js');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Derek', 90, 'derek.kilgore@gmail.com', 'dkilgore79');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github 
test('gets engineer github value', () => {
    const engineer = new Engineer('Derek', 90, 'derek.kilgore@gmail.com', 'dkilgore79');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role 
test('gets role of employee', () => {
    const engineer = new Engineer('Derek', 90, 'derek.kilgore@gmail.com', 'dkilgore79');

    expect(engineer.getRole()).toEqual("Engineer");
});