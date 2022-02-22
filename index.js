const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee.js')
const Manager = require('./Manager.js')
const Engineer = require('./Engineer.js')
const Intern = require('./Intern.js')
//var allEmployees = [];





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
      //fs.writeFileSync('index.html', generateHTMLStart())
      //console.log('Successfully wrote to index.html')
      //console.error(err);
      return enterMore();
    } else if (answers.additionalTeam == "No") {
      console.log(allEmployees);
      fs.writeFileSync('index.html', generateHTMLStart())
      // For loop
      var allEmployees = []; 
      for (var i = 0; i >= allEmployees.length; i++) { //JRM: NEXT STEP: build this for loop
        allEmployees

        fs.appendFileSync('index.html', managerCard(manager))
      }
      fs.appendFileSync('index.html', generateHTMLEnd())
      console.log('Successfully wrote to index.html')
      //console.error(err);
      return;
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
        const manager = new Manager(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.officeNumber);
        allEmployees.push(manager);
        fs.appendFileSync('index.html', managerCard(manager))
        console.log('Successfully wrote to index.html')
        //.catch((err) => console.error(err));
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
        const engineer = new Engineer(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.github, answers.githubUrl);
        allEmployees.push(engineer);
        fs.appendFileSync('index.html', engineerCard(engineer))
        console.log('Successfully wrote to index.html')
        //.catch((err) => console.error(err));
        return initialPrompt();
    }
  });
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
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
        const intern = new Intern(answers.role, answers.eeName, answers.mgrname, answers.id, answers.email, answers.school);
        allEmployees.push(intern);
        fs.appendFileSync('index.html', internCard(intern))
        console.log('Successfully wrote to index.html')
        //.catch((err) => console.error(err));
        return initialPrompt();
    }
  });
};


// JRM: Const variables for each type of card: Manager, Engineer, and Intern.
const managerCard = (allEmployees) =>
`
<!--Employee card for a manager-->
<div class="column is-3 ml-0" id="manager-card">
    <div class="card" >
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            ${allEmployees.eeName}
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Manager
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: ${allEmployees.mgrname}
            </div>
          <div class="content" id="id">
            ID: ${allEmployees.id}
          </div>
          <div class="content" id="email">
            Email: ${allEmployees.email}
            <a href="email@email.com">JayRMoses@gmail.com</a>
          </div>
          <div class="content" id="office-number">
            Office number: ${allEmployees.officeNumber}
          </div>
        </div>
      </div>
</div>
`

const engineerCard = (allEmployees) =>
`
<!--Employee card for an engineer-->
<div class="column is-3 ml-0" id="engineer-card">
    <div class="card">
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            ${allEmployees.eeName}
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Engineer
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: ${allEmployees.mgrname}
            </div>
          <div class="content" id="id">
            ID: ${allEmployees.id}
          </div>
          <div class="content" id="email">
            Email: ${allEmployees.email}
          </div>
          <div class="content" id="office-number">
            Office number: 
          </div>
          <div class="content" id="github-username">
            GitHub username: ${allEmployees.github}
          </div>
        </div>
      </div>
</div>
`

const internCard = (allEmployees) =>
`
<!--Employee card for an intern-->
<div class="column is-3 ml-0" id="intern-card">
    <div class="card">
        <header class="card-header has-background-grey-light">
          <p class="card-header-title is-size-2">
            ${allEmployees.eeName}
          </p>

        </header>
        <div class="card-content">
            <p class="subtitle is-size-3 has-text-weight-bold">
                Intern
              </p>
            <div class="content" id="team-mgr-name">
            Team manager's name: ${allEmployees.mgrname}
            </div>
          <div class="content" id="id">
            ID: ${allEmployees.id}
          </div>
          <div class="content" id="email">
            Email: ${allEmployees.email}
          </div>
          <div class="content" id="office-number">
            Office number: 
          </div>
          <div class="content" id="school">
            School: ${allEmployees.school}
          </div>
        </div>
      </div>
</div>
`

function cardType(allEmployees) {
  if (allEmployees.role == "Manager") {
    var card = managerCard;
  } else if (allEmployees.role == "Engineer") {
    var card = engineerCard;
  } else if (allEmployees.role == "Intern") {
    var card = internCard;
  }
  return card;
}

/*
function cardType(newArr) {
  newArr=allEmployees;
  console.log('here is newArr:', newArr) // JRM: Remove this later.
  if (newArr.role == "Manager") {
    var card = managerCard;
  } else if (newArr.role == "Engineer") {
    var card = engineerCard;
  } else if (newArr.role == "Intern") {
    var card = internCard;
  }
  console.log(card);
  return card;
}
*/

/*
  const generateHTML = (allEmployees) =>
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
*/


const generateHTMLStart = (allEmployees) =>
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

      

`;


const generateHTMLEnd = (allEmployees) =>
`
      </div>

  </section>
</body>
</html>


`;












const init = () => {
  initialPrompt()

    // JRM: Try splitting-out the writing parts. For example, the initial part of the HTML is written first (everything before the employee cards), then use "fs.appendFile()"" to write each EE card (put at the end of promptManager/promptEngineer/promptIntern), and then write/append the end of the HTML to close it up.
    
    /*.then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err)); */
};

init();









