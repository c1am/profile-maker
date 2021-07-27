// Import employee constructor 
const Employee = require('./Employee');

// Intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {

        // Call employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 