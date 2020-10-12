const fs = require("fs"); //includes the core module for handling files

// synchronusly writes into file
fs.writeFileSync("file1.txt", "Welcome to Nodejs Training");

//Asynchronus Writing
fs.writeFile("file2.txt", "Hey there!!", (err) => {
  if (err) console.log(err);
  else console.log("File Written successfully");
});

console.log("Program Ended");
