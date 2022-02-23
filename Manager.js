const Employee = require('./Employee.js')

// JRM: Manager class
class Manager extends Employee {
    constructor(role, eeName, mgrname, id, email, officeNumber) {
        super(role, eeName, mgrname, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
      return 'Manager';
    }
}

module.exports = Manager;
