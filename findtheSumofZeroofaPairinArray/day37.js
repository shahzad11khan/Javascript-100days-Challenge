// find the sum of zero of a pair
// time complexity is heigh DSA point of you question
let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];
// let result = [];
// for (let ele of arr) {
//   // console.log(ele)
//   for (let i = 1; i < arr.length; i++) {
//     if (ele + arr[i] === 0) {
//       result = [ele, arr[i]];
//     }
//   }
// }
// console.log(result);

// time complexity is low
// using while loop

function sumisequalzero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumisequalzero(arr));
