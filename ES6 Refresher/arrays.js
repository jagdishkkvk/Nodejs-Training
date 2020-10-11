const products = ["laptop", "mobile", "table", "charger", "fan"];

//using forEach loop to loop through array
products.forEach((p) => {
  console.log("Using foreach:", p);
});

//for-of loop added in ES6 (works similar to foreach)
for (const prod of products) {
  console.log(prod);
}

//Filter method in array
const newProduct = products.filter((p) => p.length > 5);
console.log(newProduct);

//map in arrays
const modifiedProducts = products.map((p) => {
  return "product: " + p;
});
console.log(modifiedProducts);

//slice method- divides the array into subarray
console.log(products.slice(1, 4));
