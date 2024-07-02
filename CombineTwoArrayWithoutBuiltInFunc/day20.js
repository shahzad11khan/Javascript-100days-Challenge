// combine 2 arrays using double for loop
// first method DSA point of you
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [7, 8, 9];
let combine = [];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
  combine[i] = arr[i];
}
for (let j = 0; j < arr1.length; j++) {
  combine[arr.length + j] = arr1[j];
}
console.log(combine);
