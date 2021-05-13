const questions = [
  {
    name: "managerName",
    type: "input",
    message: "What is the Manager's name?",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is the Manager's email?",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is the office number?",
  },
  {
    name: "employeeType",
    type: "list",
    message: "What type of employees to add?",
    choices: ["Engineer", "Intern"],
  },
  {
      name: 
      type:
      message:
      when: (answers) => answers.employeeType ===
  }
  {
    name: 
    type:
    message:
    when: (answers) => answers.employeeType ===
}
{
    name: 
    type:
    message:
    when: (answers) => answers.employeeType ===
}
{
    name: 
    type:
    message:
    when: (answers) => answers.employeeType ===
}
];

module.exports = {
  questions,
};
