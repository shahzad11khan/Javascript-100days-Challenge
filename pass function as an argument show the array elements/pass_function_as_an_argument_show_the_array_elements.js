// Here’s an example of a JavaScript function that takes another function as an argument and then calls it to show the elements of an array:
// Define a function that takes another function as an argument and an array
function executeFunctionOnArray(fn, array) {
  // Call the passed function with the array
  fn(array);
}

// Define the function that will be passed
function showArrayElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

// Define an array of elements
const myArray = [1, 2, 3, 4, 5];

// Pass the showArrayElements function and the array to executeFunctionOnArray
executeFunctionOnArray(showArrayElements, myArray);
