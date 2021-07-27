// Import employee constructor 
const Employee = require("./Employee");

// Engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {

        // Call employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 