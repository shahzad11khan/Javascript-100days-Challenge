// Sort Number Array
let arr = [2, 3, 4, 1, 6, 8, 9, 13, 234, 1341, 6356];

console.log(arr);
let newArr;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      newArr = arr[i];
      arr[i] = arr[j];
      arr[j] = newArr;
    }
  }
}
console.log(arr);
