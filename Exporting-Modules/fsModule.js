const fs = require("fs"); //includes the core module for handling files

// synchronusly writes into file
//fs.writeFileSync("file1.txt", "Welcome to Nodejs Training");

//Asynchronus Writing
const fileWrite = fs.writeFile(
  "file2.txt",
  "Hey Coders!! How are you?",
  (err) => {
    if (err) console.log(err);
    else console.log("File Written successfully");
  }
);

const name = "Neha";

//Exporting multiple things
// exports.obj = {
//   name: name,
//   fileWrite: fileWrite,
// };

exports.name = name;
exports.fileWrite = fileWrite;
