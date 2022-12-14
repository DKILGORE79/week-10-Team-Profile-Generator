
// importing Employee constructor 
const Employee = require('./Employee.js');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
        getofficeNumber() {
            return this.officeNumber;
        }
    // override employee role
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 