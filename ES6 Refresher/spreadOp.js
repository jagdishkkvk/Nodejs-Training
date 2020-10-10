const product = ["mobile", "laptop", "charger"];

const copiedProduct = [...product, "new"];
console.log("Old: ", product);
console.log("Copied: ", copiedProduct);

const book = {
  name: "JavaScript",
  author: "KK",
};

const newBook = {
  ...book,
  price: 780,
};
console.log(newBook);
