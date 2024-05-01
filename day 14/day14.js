// treversing in array
let arr = [1, 3, 4, 6, 8, 9, 0];
let position = 2;
let newvalue = 345;
// add element with any postion
for (let j = arr.length; j >= 0; j--) {
  //   console.log(arr[j]);
  if (j == position) {
    arr[j] = newvalue;
  }
}
console.log(arr);

// add element in last
// for (let j = arr.length; j >= 0; j--) {
//   //   console.log(arr[j]);
//   if (j == arr.length) {
//     arr[j] = newvalue;
//   }
// }
// console.log(arr);
