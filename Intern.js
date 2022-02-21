const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(school) {
        this.answers.school = school;
    }
    getSchool(){}
    getRole(){}
  }

const intern = new Intern();

intern.getSchool();
intern.getRole();









