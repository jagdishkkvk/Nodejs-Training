const express = require("express");
const app = express();

app.use("/products", (req, res, next) => {
  console.log("Second Middleware");
  res.send("Products");
});

app.use("/", (req, res, next) => {
  console.log("First Middleware");
  res.send("Welcome to Express");
});

app.listen(5000);
