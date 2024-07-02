// anagram
let str1 = "shahzad";
let str2 = "hazhasd";

console.log(str1.toLowerCase()); // listen
console.log(str2.toLowerCase()); // silent

const arr1 = str1.toLowerCase().split("");
console.log(arr1); // ['l', 'i', 's', 't', 'e', 'n']
const arr2 = str2.toLowerCase().split("");
console.log(arr2); // ['s', 'i', 'l', 'e', 'n', 't']

let newString;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      newString = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = newString;
    }
  }
}
// console.log(arr1); // sorted arr1
let newString1;
for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] > arr2[j]) {
      newString = arr2[i];
      arr2[i] = arr2[j];
      arr2[j] = newString;
    }
  }
}
// console.log(arr2); // sorted arr1

for (let k = 0; k < arr1.length; k++) {
  // console.log(arr1[k])
  if (arr1[k] === arr2[k]) {
    console.log(true);
  }
}
