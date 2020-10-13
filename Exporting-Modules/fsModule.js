const fs = require("fs"); //includes the core module for handling files
const sumModule = require("./sum");

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

console.log("Sum is: ", sumModule.sum(3, 4));
console.log("Name: ", sumModule.name);
