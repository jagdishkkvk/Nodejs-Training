const http = require("http");
const fileModule = require("./fsModule");
const server = http.createServer((req, res) => {
  console.log("Server Running...");
  fileModule.fileWrite();
});
console.log("After http server");
console.log("Name exported: ", fileModule.name);

server.listen(5000);
