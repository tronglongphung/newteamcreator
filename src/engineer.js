const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
