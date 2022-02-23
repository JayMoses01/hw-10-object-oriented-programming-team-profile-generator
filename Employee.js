class Employee {
    constructor(role, eeName, mgrname, id, email){
      this.role = role;
      this.eeName = eeName;
      this.mgrname = mgrname;
      this.id = id;
      this.email = email;
    }
    getRole(){
     // console.log(this.answers.role, 'Role received');
      return 'Employee';
    }
    getName(){
      //console.log(this.answers.eeName, 'Name received');
      return this.eeName;
    }
    getId(){
     // console.log(this.answers.id, 'ID received');
    }
    getEmail(){
    //  console.log(this.answers.email, 'Email received');
    }

}



// I might need to do this
/*
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();
*/



module.exports = Employee;









