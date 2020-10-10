//Objects in ES6

const book = {
  name: "Nodejs",
  price: 900,
  author: "Ryan",
  //   getPrice: () => {
  //     console.log("Price of book", this.price); //undefined as it is having a global  scope to the node
  //   },

  getPrice() {
    return "Price of the book is " + this.price;
  },
};

console.log(book.getPrice());
