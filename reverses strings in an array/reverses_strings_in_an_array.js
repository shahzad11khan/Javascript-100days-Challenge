// JavaScript function that reverses strings in an array without using built-in functions
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseStrings(inputArray) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
    let reversedStr = reverseString(inputArray[i]);
    outputArray.push(reversedStr);
  }
  return outputArray;
}

const input = ["hi", "hello", "shahzad", "khan"];
const output = reverseStrings(input);
console.log(output);
