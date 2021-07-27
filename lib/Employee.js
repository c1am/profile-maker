// Employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Return name from input
    getName () {
        return this.name;
    }

    // Return ID from input
    getId () {
        return this.id;
    }   

    // Retrun email from input
    getEmail () {
        return this.email;
    }

    // Return employee role 
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 