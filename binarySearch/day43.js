// binary search DSA
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let first = 0;
let final = array.length - 1;
let find = 5;
let position = undefined; // Corrected variable name

while (first <= final) {
  let mid = Math.floor((first + final) / 2);
  if (array[mid] === find) {
    position = mid;
    break; // Added break statement
  } else if (array[mid] < find) {
    // Corrected variable name
    first = mid + 1; // Corrected variable name
  } else {
    final = mid - 1; // Corrected variable name
  }
}

console.log(position);
