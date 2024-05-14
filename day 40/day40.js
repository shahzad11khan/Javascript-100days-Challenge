// Find the largest sum of consecutive digits

let array = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];
let number = 4;
let max = 0;

for (let i = 0; i < array.length - number + 1; i++) {
  let temp = 0;
  for (let j = 0; j < number; j++) {
    // console.log(`i : ${i} , j : ${j}`);
    temp += array[i + j];
  }
  if (temp > max) {
    console.log(temp);
    max = temp;
  }
  console.log(`outer loop : ${i}`);
}

console.log(`Max : `, max);
