const hobbies = ["Sports", "Painting", "Cooking"];

hobbies.push("Programming");
//hobbies = [1, 2, 3, 4, 5]; //Throw an error as we cant change the reference to which hobby is pointing to

console.log(hobbies); //What will be the output?

const obj = {
  name: "ABC",
  marks: 100,
};
obj.city = "Jaipur";

// obj = {
//   product: "chair", //throws an error - same reason as above
// };
console.log(obj); //What will be the output?
