// insertion sort algo
let arr = [12, 11, 13, 5, 6];

console.log("Unsorted array:", arr);

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  // j  greater then or equal to 0 and value  greater then  current value
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}

console.log("Sorted array:", arr);
