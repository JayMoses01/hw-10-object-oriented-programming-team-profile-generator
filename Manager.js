const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(eeName, mgrname, id, email, role, officeNumber) {
        super(eeName, mgrname, id, email, role);
        this.officeNumber = officeNumber;
    }
    getRole(){}
  }


//Manager.getRole();

module.exports = Manager;



