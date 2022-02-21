const Employee = require('./Employee.js')

class Manager extends Employee {
    officeNumber
    getRole(){}
  }

const manager = new Manager(officeNumber);

manager.getRole();




