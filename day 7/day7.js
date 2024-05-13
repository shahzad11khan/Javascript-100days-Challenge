// find repeatition of a number in array
let arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 8, 8];
let rep = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  // console.log("i value", arr[i]);
  for (let k = i + 1; k <= arr.length - 1; k++) {
    // console.log("k value", arr[k]);
    if (arr[i] === arr[k]) {
      console.log("Repeated value:", arr[k]);
      break;
    }
  }
}
