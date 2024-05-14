// find the unique number of an array

let array = [1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9];
let i = 0;
if (array.length) {
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  //   return i + 1;
  console.log(i + 1);
} else {
  throw new Error("Array is empty");
}
