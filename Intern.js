const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(eeName, mgrname, id, email, role, school) {
        super(eeName, mgrname, id, email, role);
        this.school = school;
    }
    getSchool(){}
    getRole(){}
  }

//Intern.getSchool();
//Intern.getRole();

module.exports = Intern;








