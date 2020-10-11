const store = {
  books: [
    { name: "Nodejs", author: "Neha", price: 700 },
    { name: "MERN", author: "Max", price: 1000 },
  ],
  count: 35,
  isAvailable: true,
  address: {
    street: "Pali",
    city: "Mumbai",
    pincode: "230532",
  },
};

console.log(store.books[0].name);
console.log(store.address);
