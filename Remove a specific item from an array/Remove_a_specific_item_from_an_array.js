// Remove a specific item from an array
const arr = [1, 2, 3, 4, 5];
const itemToRemove = 2;
const filteredArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== itemToRemove) {
    filteredArr.push(arr[i]);
  }
}

console.log(filteredArr);

// another method using splice
let array = [1, 2, 3, 4, 5];
let index = 2;
array.splice(index, 1);

console.log(array);
