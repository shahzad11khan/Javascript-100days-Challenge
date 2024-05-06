// how to convert object to an array
const obj = {
  name: "shahzad",
  education: "bscs",
  age: 21,
};
console.log(obj);
const makearray = Object.entries(obj);
// here is use Object.entries this function return give a key-value of the object
//             Object.values  this fuction reutrn give a only value of the object
//             Object.keys  this fuction reutrn give a only key of the object
console.log(makearray);
console.log(makearray.flat(Infinity));
// flate(Infinity) is use to convert the sub array into single array

// convert the Array into object
const arr = [2, 3, 4, 5, 56, [66, 6], 66, 7];

const object = Object.fromEntries(
  arr.map((item, index) => {
    return [index, item];
  })
);

console.log(object);
