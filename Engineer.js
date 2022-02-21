const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(role, eeName, mgrname, id, email, github, githubUrl) {
        super(role, eeName, mgrname, id, email);
        this.github = github;
        this.githubUrl = githubUrl;
    }
    getGithub(){}
    getRole(){
      return 'Engineer';
    }
}



/*
engineer.getGithub();
engineer.getRole();
*/









module.exports = Engineer;





