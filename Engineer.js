const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(github) {
        this.answers.github = github;
    }
    getGithub(){}
    getRole(){}
  }

const engineer = new Engineer(answers.github);

engineer.getGithub();
engineer.getRole();






