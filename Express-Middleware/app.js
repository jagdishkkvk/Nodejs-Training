const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First Middleware");
  next(); //This will cinvoke the next middleware in line
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  res.send("<h1>Welcome to Express.js</h1>"); //Stops calling middleware after this by  sending the response.
});

app.listen(5000);
