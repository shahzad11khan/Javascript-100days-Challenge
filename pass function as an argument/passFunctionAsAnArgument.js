// Here’s an example of a JavaScript function that takes another function as an argument and then calls it to show console.log("hi"):

// Define a function that takes another function as an argument
function executeFunction(fn) {
  // Call the passed function
  fn();
}

// Define the function that will be passed
function sayHi() {
  console.log("hi");
}

// Pass the sayHi function to executeFunction
executeFunction(sayHi);
