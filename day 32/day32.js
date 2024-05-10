// what is hoisting in js

// create a simple function

// function sayhellow() {
//   console.log("hello");
// }
// var i = 10;
// sayhellow();
// console.log(i);

// output
// hellow
// 10

// uderstanding of hositing
sayhellow();
console.log(i);
function sayhellow() {
  console.log("hello");
}
var i = 10;

// output
// hellow
// undefined
