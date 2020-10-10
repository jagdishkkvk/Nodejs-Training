var name = "Neha"; //context of execution scope
var age = 2.9;
var isRegistered = true;
var category = "2.8";

//Arrow Functions

const showDetails = (name, age, isRegistered) => {
  if (isRegistered && category === "2.8") {
    return "Name: " + name + "\nAge: " + age;
  } else {
    return "Not a registered user!";
  }
};
console.log(showDetails(name, age, isRegistered));

//Arrow function to return the sum
const sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 6));

//Shorthand syntax
const sub = (a, b) => a - b;
console.log(sub(110, 90));

//One argument
const message = (m) => "message: " + m;
console.log(message("Hey Coders!!"));
