class Employee {
    constructor(eeName, mgrname, id, email, role){
      this.answers.eeName = eeName;
      this.answers.mgrname = mgrname;
      this.answers.id = id;
      this.answers.email = email;
      this.answers.role = role;
    }
    getName(){
      console.log(this.answers.eeName, 'Name received')
    }
    getId(){
      console.log(this.answers.id, 'ID received')
    }
    getEmail(){
      console.log(this.answers.email, 'Email received')
    }
    getRole(){
      console.log(this.answers.role, 'Role received')
    }
  }

module.exports = Employee;








