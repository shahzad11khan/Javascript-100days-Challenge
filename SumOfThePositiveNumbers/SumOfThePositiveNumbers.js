// sum the positive numbers in array
let array = [1, 2, -9, -5, 9];

let sum = 0;
const positive = array.filter((num) => num > 0);
console.log(`get the positive numbers from the array : ${positive}`);

for (let el of positive) {
  // console.log(el)
  sum += el;
}
console.log(`Sum of the positive numbers is : ${sum}`);
