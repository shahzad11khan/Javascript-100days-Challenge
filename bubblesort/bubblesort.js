// bubble sort
let array = [1, 4, 6, 8, 9, 0, 10];
const bubblesort = (array) => {
  for (let index = array.length; index > 0; index--) {
    for (let j = 0; j < index - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
const result = bubblesort(array);
console.log(result);
