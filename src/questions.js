const questions = [
  // {
  //   name: "projectName",
  //   type: "input",
  //   message: "Whats the name of your project?",
  // },
  {
    name: "managerName",
    type: "input",
    message: "What is the Manager's name?",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is the Manager's Email?",
  },
  {
    name: "managerID",
    type: "input",
    message: "What is the Manager's ID?",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is the office number?",
  },
  {
    name: "options",
    type: "list",
    message: "What would you like to do?",
    choices: ["Add an Engineer", "Add an Intern", "Exit"],
  },
];

const engineerQuestion = [
  {
    name: "engineerName",
    type: "input",
    message: "What is the Engineer's name?",
  },
  {
    name: "engineerID",
    type: "input",
    message: "What is the Engineer's ID?",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "What is the Engineer's Email?",
  },
  {
    name: "engineerGit",
    type: "input",
    message: "What is the Engineer's Github?",
  },
  {
    name: "options",
    type: "list",
    message: "What would you like to do?",
    choices: ["Add an Engineer", "Add an Intern", "Exit"],
  },
];

const internQuestion = [
  {
    name: "internName",
    type: "input",
    message: "What is the Intern's name?",
  },
  {
    name: "internID",
    type: "input",
    message: "What is the Intern's ID?",
  },
  {
    name: "internEmail",
    type: "input",
    message: "What is the Intern's Email?",
  },
  {
    name: "internSchool",
    type: "input",
    message: "What is the Intern's School?",
  },
  {
    name: "options",
    type: "list",
    message: "What would you like to do?",
    choices: ["Add an Engineer", "Add an Intern", "Exit"],
  },
];

module.exports = {
  questions,
  engineerQuestion,
  internQuestion,
};
