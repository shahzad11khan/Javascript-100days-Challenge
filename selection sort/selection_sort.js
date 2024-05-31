// selection sort algoritm
let array = [2, 4, 5, 6, 78, 3, 1, 0];

for (let i = 0; i < array.length; i++) {
  // console.log(array[i])
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    // console.log(array[j])
    if (array[j] < array[min]) min = j;
  }
  // console.log(min)
  if (i !== min) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}
console.log(array);
