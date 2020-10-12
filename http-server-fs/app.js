const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Server Running...");
});
console.log("After http server");

server.listen(5000);
