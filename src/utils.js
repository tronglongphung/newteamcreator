const fs = require("fs");

const createFileName = (name) => `${name.replace(/\s/g, "")}.html`;

const writeFile = (filename, data) => {
  fs.writeFile(filename, data, "utf8", () => {
    console.log(`Successfully created ${filename}.`);
  });
};

module.exports = {
  createFileName,
  writeFile,
};
