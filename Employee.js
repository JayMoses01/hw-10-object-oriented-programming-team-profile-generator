// JRM: Employee class
class Employee {
    constructor(role, eeName, mgrname, id, email){
      this.role = role;
      this.eeName = eeName;
      this.mgrname = mgrname;
      this.id = id;
      this.email = email;
    }
    getRole(){
      return 'Employee';
    }
    getName(){
      return this.eeName;
    }
    getId(){
    }
    getEmail(){
    }

}

module.exports = Employee;
