// helper Recursion function
// call the function with in the function
// means nested function call the inner function is called helper recursion function
// find the odd number in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findOdd(array) {
  let result = []; //create empty array
  function helperRecursiveFunction(inputArry) {
    if (inputArry.length === 0) {
      return;
    }
    if (inputArry[0] % 2 !== 0) {
      result.push(inputArry[0]);
    }
    helperRecursiveFunction(inputArry.slice(1)); // helper recursive function
  }
  helperRecursiveFunction(array); //first time call
  return result;
}
const oddresult = findOdd(array);
console.log(oddresult);
