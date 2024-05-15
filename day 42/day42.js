//  sum of the digits 1 + 2 + 3 + 4
let number = 1234;
let sum = 0;
// for a signle step
// sum += number % 10;
// console.log(sum);
// number = Math.floor(number / 10);
// console.log(number);

while (number > 0) {
  sum += number % 10;
  console.log("inner: ", sum);

  number = Math.floor(number / 10);
  console.log("inner number:", number);
}
console.log("outer :", sum);

// count a number
let countingnumber = 1233254352452342;
let count = 0;
do {
  count++;
  countingnumber = Math.floor(countingnumber / 10);
} while (countingnumber > 0);

console.log("count: ", count);
console.log("++++++++++++++++++++++++++++++++++++");
// find the palandrom number

let palandrom = 121;
let reverse = 0;
while (palandrom > 0) {
  let lastdigit = palandrom % 10;
  console.log("lastdigit:", lastdigit);
  reverse = reverse * 10 + lastdigit;
  console.log("reverse:", reverse);
  palandrom = Math.floor(palandrom / 10);
  console.log("palandrom:", palandrom);
}
console.log(reverse);
