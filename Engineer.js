const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(eeName, mgrname, id, email, role, github) {
        super(eeName, mgrname, id, email, role);
        this.github = github;
    }
    getGithub(){}
    getRole(){}
  }


//Engineer.getGithub();
//Engineer.getRole();

module.exports = Engineer;





