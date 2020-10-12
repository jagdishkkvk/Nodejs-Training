const express = require("express");
const app = express();

//Adding Middlewares
// app.use((req, res, next) => {
//   console.log("First Middleware");
//   next(); //This will cinvoke the next middleware in line
// });

// app.use((req, res, next) => {
//   console.log("Second Middleware");
//   res.send("<h1>Welcome to Express.js</h1>"); //Stops calling middleware after this by  sending the response.
// });

//Routing Middlewares
app.use("/products", (req, res, next) => {
  console.log("Second Middleware");
  res.send("Products");
});

app.use("/", (req, res, next) => {
  console.log("First Middleware");
  res.send("Welcome to Express");
});

app.listen(5000);
