const renderManager = (member) => {
  return `
  <div
    class="grid grid-modify justify-items-stretch justify-around w-full p-4 mb-8 bg-white border-solid rounded-lg lg:w-3/4">

    <div class="flex flex-row items-center justify-between">
        <h2 class="font-semibold capitalize">Name: ${member.getName()}</h2>

    </div>
    <div class="flex flex-row items-center justify-between">
        <p>ID: ${member.getId()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Email: ${member.getEmail()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Role: ${member.getRole()}</p>
    </div>

  </div>`;
};

const renderEngineer = (member) => {
  return `
  <div
    class="grid grid-modify justify-items-stretch justify-around w-full p-4 mb-8 bg-white border-solid rounded-lg lg:w-3/4">

    <div class="flex flex-row items-center justify-between">
        <h2 class="font-semibold capitalize">Name: ${member.getName()}</h2>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>ID: ${member.getId()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Email: ${member.getEmail()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Role: ${member.getRole()}</p>
    </div>
    <div class="flex flex-row items-center justify-between text-green-500">
        <a href="https://github.com/${member.getGithub()}">Github: ${member.getGithub()}</a>
    </div>

  </div>`;
};

const renderIntern = (member) => {
  return `
  <div
    class="grid grid-modify justify-items-stretch justify-around w-full p-4 mb-8 bg-white border-solid rounded-lg lg:w-3/4">

    <div class="flex flex-row items-center justify-between">
        <h2 class="font-semibold capitalize">Name: ${member.getName()}</h2>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>ID: ${member.getId()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Email: ${member.getEmail()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>Role: ${member.getRole()}</p>
    </div>
    <div class="flex flex-row items-center justify-between">
        <p>School: ${member.getSchool()}</p>
    </div>
  </div>`;
};

function renderTemplate(output) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
  
    <title>Team Creator</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="./dist/style.css" rel="stylesheet">
  
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
    <div class="container mx-auto mt-8 bg-gray-100 rounded-lg">


    <div class="lg:flex lg:items-center lg:justify-between ">
      <div class="flex-1 min-w-0 pt-5">
        
      </div>
    </div>
   
    <div class="flex flex-wrap justify-center p-7 pt-4">
        ${output}
    
    </div>
  
  </div>
    </main>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min.js"></script>
  </body>
  
  </html>`;
}
module.exports = {
  renderManager,
  renderEngineer,
  renderIntern,
  renderTemplate,
};
