class Employee {
    constructor(eeName, mgrname, id, email, role){
      this.answers.eeName = eeName;
      this.answers.mgrname = mgrname;
      this.answers.id = id;
      this.answers.email = email;
      this.answers.role = role;
    }
    getName(){
      console.log(this.answers.eeName, 'got your name')
    }
    getId(){
      console.log(this.answers.id, 'got your ID')
    }
    getEmail(){
      console.log(this.answers.email, 'got your email')
    }
    getRole(){
      console.log(this.answers.role, 'got your role')
    }
  }

const employee = new Employee(answers.eeName, answers.role, answers.id, answers.email);

module.exports = Employee;








