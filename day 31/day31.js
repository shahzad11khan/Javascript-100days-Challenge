//  stack in DSA
// stack maximum length is 5
// only push function not default push function use
let arr = [];
let currentSize = arr.length;
let maximum = 5;

const push = (newValue) => {
  if (currentSize >= maximum) {
    console.log(`Stack is full`);
  }

  arr[currentSize] = newValue;
  currentSize += 1;
};
push(12);
push(3);
push(19);
push(10);
push(19);

// remove the last element from the stack
const pop = () => {
  if (currentSize > 0) {
    currentSize -= 1;
    arr.length = currentSize;
  } else {
    console.log(`Stack is Empty`);
  }
};
pop();
console.log(arr);
