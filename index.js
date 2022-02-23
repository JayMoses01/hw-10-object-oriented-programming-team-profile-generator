const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee.js')
const Manager = require('./Manager.js')
const Engineer = require('./Engineer.js')
const Intern = require('./Intern.js')
var allEmployees = [];
var fullCards = '';




const initialPrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "additionalTeam",
      message: "Would you like to create one or more employee cards?",
      choices: ["Yes","No"]
    },
  ])
  .then((answers) => {
    if (answers.additionalTeam == "Yes") {
      return enterMore();
    } else if (answers.additionalTeam == "No") {

      for (var i = 0; i < allEmployees.length; i++) {

        fullCards += allCard(allEmployees[i])
        console.log(allEmployees[i])
        
      }

      fs.writeFileSync('index.html', generateHTML(fullCards))
      console.log('Successfully wrote to index.html')
      //console.error(err);
    }
  });
};


const enterMore = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'initrole',
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
      },
    ])
    .then((answers) => {
      if (answers.initrole == "Manager") {
        return promptManager();
      } else if (answers.initrole == "Engineer") {
        return promptEngineer();
      } else if (answers.initrole == "Intern") {
        return promptIntern();
      }
  });
};

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Confirm employee's role is 'Manager'",
      choices: ["Manager", "Go back to menu"]
    },
    {
      type: 'input',
      name: 'eeName',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
    },
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
  ])
  .then((answers) => {
    if (answers.role !== "Manager"){
      return initialPrompt();
    } else if (answers.role == "Manager"){
        let manager = new Manager(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.officeNumber);
        allEmployees.push(manager);
 
        return initialPrompt();
    }
  });
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Confirm employee's role is 'Engineer'",
      choices: ["Engineer", "Go back to menu"]
    },
    {
      type: 'input',
      name: 'eeName',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'mgrname',
      message: "What is the employee's team manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
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
  ])
  .then((answers) => {
    if (answers.role !== "Engineer"){
      return initialPrompt();
    } else if (answers.role == "Engineer"){
        let engineer = new Engineer(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.github, answers.githubUrl);
        allEmployees.push(engineer);

        return initialPrompt();
    }
  });
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Confirm employee's role is 'Intern'",
      choices: ["Intern", "Go back to menu"]
    },
    {
      type: 'input',
      name: 'eeName',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'mgrname',
      message: "What is the employee's team manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
    },
    // JRM: Question for intern role only.
    {
      type: 'input',
      name: 'school',
      message: "What is the name of the employee's school?",
    },
  ])
  .then((answers) => {
    if (answers.role !== "Intern"){
      return initialPrompt();
    } else if (answers.role == "Intern"){
        let intern = new Intern(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.school);
        allEmployees.push(intern);

        return initialPrompt();
    }
  });
};

let allCard = (emp) => {
return `
<!--Employee card for all employee types: Manager/Engineer/Intern-->
<div class="column is-3 ml-0" id="intern-card">
    <div class="card">
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            ${emp.eeName}
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                ${emp.role}
              </p>
            <div class="content" id="team-mgr-name">
              Team manager's name: ${emp.mgrname || 'N/A'}
            </div>
          <div class="content" id="id">
            ID: ${emp.id}
          </div>
          <div class="content" id="email">
            Email: ${`<a href="` + emp.email + `">` + emp.email + `</a>`}
          </div>
          <div class="content" id="office-number">
            Office number: ${emp.officeNumber || 'N/A'}
          </div>
          <div class="content" id="github-username">
            GitHub username: ${emp.github || 'N/A'}
            
          </div>
          <div class="content" id="school">
            School: ${emp.school || 'N/A'}
          </div>
        </div>
      </div>
</div>
`
}

  const generateHTML = (cards) =>
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

        ${cards}

        </div>

    </section>
</body>
</html>


`;

const init = () => {
  initialPrompt()
};

init();



