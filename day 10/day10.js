//  sort array
let arr = [2, 3, 45, 23, 1, 0];
console.log("Before sort:", arr);
for (let i = 0; i < arr.length; i++) {
  // console.log("outer loop ",arr[i])
  for (let j = 0; j < arr.length; j++) {
    // console.log("inner loop ",arr[j])
    // swap the numbers
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("After sort:", arr);
