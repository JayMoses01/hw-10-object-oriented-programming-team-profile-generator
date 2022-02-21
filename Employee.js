class Employee {
    constructor(eeName, mgrname, id, email, role){
      this.eeName = eeName;
      this.mgrname = mgrname;
      this.id = id;
      this.email = email;
      this.role = role;
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








