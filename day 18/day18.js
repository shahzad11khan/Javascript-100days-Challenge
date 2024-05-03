// how ot delete element from array DSA point of you question
let arr = [1, 2, 3, 4, 5, 6];
let po = 3;
for (i = po; i < arr.length; i++) {
  console.log(arr[i]);
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);
