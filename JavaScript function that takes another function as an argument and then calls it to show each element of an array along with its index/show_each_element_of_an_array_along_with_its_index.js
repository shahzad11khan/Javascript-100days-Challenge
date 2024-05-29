//  Here’s an example of a JavaScript function that
// takes another function as an argument and then calls it to show each element of an array along with its index:

// Define a function that takes another function as an argument and an array
function executeFunctionOnArray(fn, array) {
  // Call the passed function with the array
  fn(array);
}

// Define the function that will be passed
function showArrayElementsWithIndex(arr) {
  arr.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
  });
}

// Define an array of elements
const myArray = ["a", "b", "c", "d", "e"];

// Pass the showArrayElementsWithIndex function and the array to executeFunctionOnArray
executeFunctionOnArray(showArrayElementsWithIndex, myArray);
