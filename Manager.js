const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(officeNumber) {
        this.answers.officeNumber = officeNumber;
    }
    getRole(){}
  }

const manager = new Manager(officeNumber);

manager.getRole();




