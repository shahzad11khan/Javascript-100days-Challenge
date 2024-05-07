// fint factorial with out loop
// Recursion method call by self
// DSA point of you question

let data = 5;
const factorial = (data) => {
  if (data === 0) {
    return 1;
  }
  return data * factorial(data - 1);
  //        5  *   4
  //        20 *   3
  //        60 *   2
  //        12 *   1
};
console.log(factorial(data));
