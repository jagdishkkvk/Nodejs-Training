const express = require("express");
const app = express();

//Match only specific routes and order in which these are called does not matter now.
app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to my Application</h1>");
});
app.get("/products", (req, res, next) => {
  res.send("Products");
});
app.get("*", (req, res, next) => {
  res.send("<h2>Page not Found!!</h2>");
});

app.listen(5000);
