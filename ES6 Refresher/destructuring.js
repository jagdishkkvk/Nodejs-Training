//Destructuring an object
const book = {
  // name: "Nodejs",
  price: 900,
  author: "Ryan",
  getPrice() {
    return "Price of the book is " + this.price;
  },
};

const { price, name = "abc" } = book;
console.log(price, name);

//Destructuring an array
const hobbies = ["Sports", "Cooking", "Programming"];
const [h1, , h3] = hobbies;
console.log(h1, h3);
