// how to convert array to object
let array = ["bmw", "honda", "toyota"];
console.log(array);
let obj = {};
console.log(obj);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  obj[[i]] = array[i];
  // console.log(result)
}
console.log(obj);
