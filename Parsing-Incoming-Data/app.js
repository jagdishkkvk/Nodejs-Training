const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //Parse the body of request sent by user

//Match only specific routes and order in which these are called does not matter now.
app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to my Application</h1>");
});
app.get("/addProduct", (req, res, next) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send(req.body.title);
});

//Handling 404 error: page not found
app.get("*", (req, res, next) => {
  res.send("<h2>Page not Found!!</h2>");
});

app.listen(5000);
