const inquirer = require('inquirer');
const fs = require('fs');



class Employee {
  constructor(eeName, mgrname, id, email){
    this.eeName = eeName;
    this.mgrname = mgrname;
    this.id = id;
    this.email = email;
  }
  getName(){
    console.log(this.eeName, 'got your name')
  }
  getId(){

  }
  getEmail(){

  }
  getRole(){

  }
}


class Manager extends Employee {
  officeNumber
  getRole(){

  }
}


class Engineer extends Employee {
  github
  getGithub(){

  }
  getRole(){

  }
}

class Intern extends Employee {
  school
  getSchool(){

  }
  getRole(){

  }
}




var employee = new Employee(eeName, role, id, email, officeNumber);
var manager = new Manager(officeNumber);
var engineer = new Engineer();
var intern = new Intern();














const promptUser = () => {
    return inquirer.prompt([
    // JRM: I'll need to add if/then statements here based on user's selections--to create engineer, manager, or intern cards. Make it so these questions loop again if the user wnats to enter more than one employee.
      
    // JRM: Question for all employees.
      {
        type: 'input',
        name: 'eeName',
        message: "What is the employee's name?",
      },
      // JRM: Question for all employees.
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ["Employee", "Manager", "Engineer", "Intern"]
      },
      // JRM: Question for all employees.
      {
        type: 'input',
        name: 'mgrname',
        message: "What is the employee's team manager's name?",
      },
      // JRM: Question for all employees.
      {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
      },
      // JRM: Question for manager role only.
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the employee's office number?",
      },
      // JRM: Question for engineer role only.
      {
        type: 'input',
        name: 'github',
        message: "What is the employee's GitHub username?",
      },
      // JRM: Question for engineer role only.
      {
        type: 'input',
        name: 'githubUrl',
        message: "What is the employee's GitHub URL?",
      },
      // JRM: Question for intern role only.
      {
        type: 'input',
        name: 'school',
        message: "What is the name of the employee's school?",
      },
      // JRM: Question for all employees.
      {
        type: 'list',
        name: 'finished',
        message: "Would you like to enter any other employees?",
      },
    ]);
  };

// JRM: Const variables for each type of card: Employee, Manager, Engineer, and Intern.
const employeeCard = `
<!--Employee card for an employee-->
<div class="column is-3 ml-0" id="employee-card">
    <div class="card" >
        <header class="card-header has-background-grey-light">
            <p class="card-header-title is-size-2">
            Name
            </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Employee
                </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: 
            </div>
            <div class="content" id="id">
            ID: 
            </div>
            <div class="content" id="email">
            Email: 
            <a href="email@email.com">JayRMoses@gmail.com</a>
            </div>
            <div class="content" id="phone">
            Office number: 
            </div>
        </div>
        </div>
</div>
`

const managerCard = `
<!--Employee card for a manager-->
<div class="column is-3 ml-0" id="manager-card">
    <div class="card" >
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            Name
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Manager
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: 
            </div>
          <div class="content" id="id">
            ID: 
          </div>
          <div class="content" id="email">
            Email: 
            <a href="email@email.com">JayRMoses@gmail.com</a>
          </div>
          <div class="content" id="phone">
            Office number: 
          </div>
        </div>
      </div>
</div>
`

const engineerCard = `
<!--Employee card for an engineer-->
<div class="column is-3 ml-0" id="engineer-card">
    <div class="card">
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            Name
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Engineer
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: 
            </div>
          <div class="content" id="id">
            ID: 
          </div>
          <div class="content" id="email">
            Email: 
          </div>
          <div class="content" id="office-number">
            Office number: 
          </div>
          <div class="content" id="github-username">
            GitHub username: 
          </div>
        </div>
      </div>
</div>
`

const internCard = `
<!--Employee card for an intern-->
<div class="column is-3 ml-0" id="intern-card">
    <div class="card">
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            Name
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Intern
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: 
            </div>
          <div class="content" id="id">
            ID: 
          </div>
          <div class="content" id="email">
            Email: 
          </div>
          <div class="content" id="office-number">
            Office number: 
          </div>
          <div class="content" id="school">
            School: 
          </div>
        </div>
      </div>
</div>
`






  const generateHTML = ({ name, location, github, linkedin }) =>
  // JRM: Might need to also do if/then statements to return different HTML based on whether engineer, manager, or intern cards need to be created.
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bulma CSS framework link-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> </link>
    <title>My Team</title>
</head>

<body>
    <section class="section box is-size-1 has-text-centered has-background-info has-text-weight-bold has-text-white">
        My Team
    </section>
    <section class="container">
        <div class="columns ml-0">

            <!--Employee card for a manager-->
            <div class="column is-3 ml-0" id="manager-card">
                <div class="card" >
                    <header class="card-header has-background-grey-light">
                      <p class="card-header-title is-size-2">
                        Name
                      </p>

                    </header>
                    <div class="card-content">
                        <p class="subtitle is-size-3 has-text-weight-bold">
                            Manager
                          </p>
                        <div class="content" id="team-mgr-name">
                        Team manager's name: 
                        </div>
                      <div class="content" id="id">
                        ID: 
                      </div>
                      <div class="content" id="email">
                        Email: 
                        <a href="email@email.com">JayRMoses@gmail.com</a>
                      </div>
                      <div class="content" id="phone">
                        Office number: 
                      </div>
                    </div>
                  </div>
            </div>

            <!--Employee card for an engineer-->
            <div class="column is-3 ml-0" id="engineer-card">
                <div class="card">
                    <header class="card-header has-background-grey-light">
                      <p class="card-header-title is-size-2">
                        Name
                      </p>

                    </header>
                    <div class="card-content">
                        <p class="subtitle is-size-3 has-text-weight-bold">
                            Engineer
                          </p>
                        <div class="content" id="team-mgr-name">
                        Team manager's name: 
                        </div>
                      <div class="content" id="id">
                        ID: 
                      </div>
                      <div class="content" id="email">
                        Email: 
                      </div>
                      <div class="content" id="office-number">
                        Office number: 
                      </div>
                      <div class="content" id="github-username">
                        GitHub username: 
                      </div>
                    </div>
                  </div>
            </div>

            <!--Employee card for an intern-->
            <div class="column is-3 ml-0" id="intern-card">
                <div class="card">
                    <header class="card-header has-background-grey-light">
                      <p class="card-header-title is-size-2">
                        Name
                      </p>

                    </header>
                    <div class="card-content">
                        <p class="subtitle is-size-3 has-text-weight-bold">
                            Intern
                          </p>
                        <div class="content" id="team-mgr-name">
                        Team manager's name: 
                        </div>
                      <div class="content" id="id">
                        ID: 
                      </div>
                      <div class="content" id="email">
                        Email: 
                      </div>
                      <div class="content" id="office-number">
                        Office number: 
                      </div>
                      <div class="content" id="school">
                        School: 
                      </div>
                    </div>
                  </div>
            </div>

        </div>

    </section>
</body>
</html>


  `;

  const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
