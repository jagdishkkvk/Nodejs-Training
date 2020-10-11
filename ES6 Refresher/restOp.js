const toArray = (...args) => {
  return args;
};

console.log(toArray("a", "b")); //returns ['a','b']
console.log(toArray(1, 2, 3, 4)); //returns [1,2,3,4]
