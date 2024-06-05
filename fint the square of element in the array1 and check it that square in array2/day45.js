// find the square of elements in the array array1 and check
// if that square exists in the array2
let array1 = [1, 2, 3, 4, 7];
let array2 = [4, 9, 12, 16, 76];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    let square = array1[i] * array1[i];
    if (square === array2[j]) {
      console.log(
        "Square of",
        array1[i],
        "in array1 matches element",
        array2[j],
        "in array2."
      );
    }
  }
}
