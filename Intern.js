const Employee = require('./Employee.js')

// JRM: Intern class
class Intern extends Employee {
    constructor(role, eeName, mgrname, id, email, school) {
        super(role, eeName, mgrname, id, email);
        this.school = school;
    }
    getSchool(){}
    getRole(){
      return 'Intern';
    }
}

module.exports = Intern;
