// how to convert object to array
let obj = { 0: "bmw", 1: "honda", 2: "toyota" };

const key = Object.keys(obj);
const value = Object.values(obj);

console.log("Keys of object :", key);
console.log("Value of object :", value);
let newarray = [];
for (let i = 0; i < key.length; i++) {
  for (let j = 0; j < value.length; j++) {
    if (newarray.includes(key[i]) || newarray.includes(value[j])) {
      continue;
    }
    newarray.push(key[i], value[j]);
  }
}
console.log("Final Result is: ", newarray);
