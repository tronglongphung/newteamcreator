const { prompt } = require("inquirer");
const { questions } = require("./src/questions");
const { template } = require("./src/renderer");
const { createFileName, writeFile } = require("./src/utils");

prompt(questions).then((answers) => {
  console.log(answers);

  const filename = createFileName(answers.projectName);

  writeFile(filename, template(answers));
});
