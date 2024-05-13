//write a program to find a fizzbuzz
let first = 1;
let last = 15;
let arr = [];
for (let i = first; i <= last; i++) {
  // console.log(i)
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    arr.push("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
    arr.push("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
    arr.push("Buzz");
  } else {
    console.log(i);
    arr.push(i);
  }
}
console.log(arr);
