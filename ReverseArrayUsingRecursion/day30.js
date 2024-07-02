//  reverse array using recursion
// DSA point of you question
let arr = [43, 62, 23, 12, 8, 9, 0];
console.log(`original array : ${arr}`);
let temp;
const reverse = (arr, start, end) => {
  console.log(`steps for reversing the array: ${arr}`);
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr, start + 1, end - 1);
  }
  console.log(`reverse array : ${arr}`);
};
reverse(arr, 0, arr.length - 1);
