// liner search
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let first = 0;
let final = array.length - 1;
let find = 3;
let position = undefined;

for (let o = 0; o <= final; o++) {
  if (array[o] === find) {
    position = o;
    break;
  }
}

console.log(position);

if (position === undefined) {
  // Check if position is undefined
  console.log("Position not found...!");
}
