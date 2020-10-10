const name = "Neha"; //context of execution scope
let age = 2.9;
const isRegistered = true;
let category = "prime";

name = "Rahul"; //Gives a Error: Assignment to constant variable
function showDetails(name, age, isRegistered = false) {
  if (isRegistered && category === "prime") {
    return "Name: " + name + "\nAge: " + age;
  } else {
    return "Not a registered user!";
  }
}

console.log(showDetails(name, age, isRegistered));
