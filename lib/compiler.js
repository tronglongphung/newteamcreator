const inquirer = require("inquirer");
const fs = require("fs");
const {
  questions,
  engineerQuestion,
  internQuestion,
} = require("../src/questions");
const {
  renderManager,
  renderEngineer,
  renderIntern,
  renderTemplate,
} = require("../src/renderer");
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
      renderMembers += renderIntern(member);
    } else if (member.getRole() === "Engineer") {
      renderMembers += renderEngineer(member);
    }
  });
  const output = renderTemplate(renderMembers);
  console.log("Rendered index.html successfully");
  fs.writeFileSync(`index.html`, output, "utf8");
};

module.exports = createTeam;
