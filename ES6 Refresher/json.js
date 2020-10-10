const products = `{
  "name": "laptop",
  "brand": "hp",
  "offers": ["GET50", "FLAT25"],
  "details": {
    "screenSize": "14.5inch",
    "display": "Full HD",
    "keyboard": "Backlit"
  }
}`;

console.log(JSON.parse(products).name);
