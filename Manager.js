const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(role, eeName, mgrname, id, email, officeNumber) {
        super(role, eeName, mgrname, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
      return 'Manager';
    }
}






//manager.getRole();




module.exports = Manager;



