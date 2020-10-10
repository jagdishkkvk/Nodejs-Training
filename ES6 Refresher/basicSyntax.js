var name = "Neha"; //context of execution scope
var age = 2.9;
var isRegistered = true;
var category = "2.8";

console.log(typeof name); //Prints the type of the value stored inside variable
function showDetails(name, age, isRegistered) {
  if (isRegistered && category === 2.8) {
    return "Name: " + name + "\nAge: " + age;
  } else {
    return "Not a registered user!";
  }
}

console.log(showDetails(name, age, isRegistered));
