// Import Employee constructor 
const Employee = require('./Employee');

// Manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        // Call employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}
 
module.exports = Manager; 