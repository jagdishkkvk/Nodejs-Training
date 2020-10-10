const products = ["laptop", "mobile", "table", "charger", "fan"];

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
