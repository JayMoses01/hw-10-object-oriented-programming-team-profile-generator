const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(role, eeName, mgrname, id, email, school) {
        super(role, eeName, mgrname, id, email);
        this.school = school;
    }
    getSchool(){}
    getRole(){}
  }

//Intern.getSchool();
//Intern.getRole();


//intern.getSchool();







module.exports = Intern;








