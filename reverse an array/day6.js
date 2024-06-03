// my practice
// reverse an array
let arr = [1, "3", 4, "5"];
let rev = "";

for (let j = arr.length - 1; j >= 0; j--) {
  rev += arr[j];
}
console.log(rev.split(""));

// another method
let array = [1, 6, 3, 5, 2, 9, 7];
let first = 0;
let last = array.length - 1;
while (first < last) {
  let temp = array[first];
  array[first] = array[last];
  array[last] = temp;

  first++;
  last--;
}
console.log(array);
