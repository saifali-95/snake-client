let connection;

const inputObject = {'w': 'Move: up', 'a': 'Move: left', 's': 'Move: down', 'd': 'Move: right'}

const handleUserInput = function (key) {
  //handleUserInput(key);  
   if (key === '\u0003') {
     process.exit();
   }

   if (inputObject.hasOwnProperty(key)){
    connection.write(inputObject[key]);

   }
   
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;