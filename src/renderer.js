const template = ({
  projectName,
  projectType,
  webProject,
  ecommProject,
  description,
}) =>
  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
</head>
<body>
    <h1>${projectName}</h1>
    <h3>${projectType} - ${ecommProject || webProject}</h3>
    <hr/>
    <p>${description}</p>
</body>
</html>
`;

module.exports = {
  template,
};
