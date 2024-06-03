// map in advance js
// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);

// Iterating over key-value pairs in the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// methods of map
// Accessing values in the Map
console.log(myMap.size);
console.log(myMap.get("name"));
console.log(myMap.has("name"));
console.log(myMap.delete("name"));
myMap.clear();
