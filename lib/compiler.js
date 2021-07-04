const inquirer = require("inquirer");
const fs = require("fs");

const {
  questions,
  engineerQuestion,
  internQuestion,
} = require("../src/questions");

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const teamMembers = [];

createTeam = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const manager = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.officeNumber
    );
    teamMembers.push(manager);
    switch (answers.options) {
      case "Add an Engineer":
        newEngineer();
        break;

      case "Add an Intern":
        newIntern();
        break;

      default:
        renderHtml(teamMembers);
        break;
    }
  });
};

newEngineer = () => {
  inquirer.prompt(engineerQuestion).then((answers) => {
    console.log(answers);

    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGit
    );
    teamMembers.push(engineer);
    switch (answers.options) {
      case "Add an Engineer":
        newEngineer();
        break;

      case "Add an Intern":
        newIntern();
        break;

      default:
        renderHtml(teamMembers);
        break;
    }
  });
};

newIntern = () => {
  inquirer.prompt(internQuestion).then((answers) => {
    console.log(answers);
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    switch (answers.options) {
      case "Add an Engineer":
        newEngineer();
        break;

      case "Add an Intern":
        newIntern();
        break;

      default:
        renderHtml(teamMembers);
        break;
    }
  });
};

const renderHtml = (teamMembers) => {
  let renderMembers = "";
  teamMembers.forEach((member) => {
    if (member.getRole() === "Manager") {
      renderMembers += renderManager(member);
    } else if (member.getRole() === "Intern") {
      renderMembers += renderManager(member);
    } else if (member.getRole() === "Engineer") {
      renderMembers += renderManager(member);
    }
  });
  const output = renderTemplate(renderMembers);
  console.log(renderMembers);
  fs.writeFileSync(`index.html`, output, "utf8");
};

const renderManager = (member) => {
  return `<div>${member.getName()}</div>`;
};

function renderTemplate(output) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
  
    <title>Team Creator</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="/css/teampage.css" rel="stylesheet">
  
  </head>
  
  <body>
  
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
            <span class="text-2xl pl-2">Team Creator</span>
          </a>
        </div>
      </nav>
    </header>
  
    <main>
    ${output}
    </main>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min.js"></script>
  </body>
  
  </html>`;
}

module.exports = createTeam;
