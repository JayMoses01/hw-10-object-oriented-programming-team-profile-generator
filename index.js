const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee.js')
const Manager = require('./Manager.js')
const Engineer = require('./Engineer.js')
const Intern = require('./Intern.js')
var allEmployees = [];


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
      console.log(allEmployees);
      return;
    }
  });
};

const enterMore = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
      },
    ])
    .then((answers) => {
      if (answers.role == "Manager") {
        return promptManager();
      } else if (answers.role == "Engineer") {
        return promptEngineer();
      } else if (answers.role == "Intern") {
        return promptIntern();
      }
  });
};

const promptManager = () => {
  return inquirer.prompt([
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
      name: 'mgrname',
      message: "What is the employee's team manager's name?",
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
    const manager = new Manager(answers.eeName, answers.mgrname, answers.id, answers.email, answers.officeNumber);
    allEmployees.push(manager);
    return initialPrompt();
  });
};

const promptEngineer = () => {
  return inquirer.prompt([
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
      name: 'mgrname',
      message: "What is the employee's team manager's name?",
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
    const engineer = new Engineer(answers.eeName, answers.mgrname, answers.id, answers.email, answers.github, answers.githubUrl);
    allEmployees.push(engineer);
    return initialPrompt();
  });
};

const promptIntern = () => {
  return inquirer.prompt([
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
      name: 'mgrname',
      message: "What is the employee's team manager's name?",
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
    const intern = new Intern(answers.eeName, answers.mgrname, answers.id, answers.email, answers.school);
    allEmployees.push(intern);
    return initialPrompt();
  });
};


// JRM: Const variables for each type of card: Manager, Engineer, and Intern.
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
/*
function cardType(answers) {
  if (answers.role == "Manager") {
    var card = managerCard;
  } else if (answers.role == "Engineer") {
    var card = engineerCard;
  } else if (answers.role == "Intern") {
    var card = internCard;
  }
  return card;
}
*/

  const generateHTML = (allEmployees) =>
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


        

        </div>

    </section>
</body>
</html>


`;

const init = () => {
  initialPrompt()
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();









