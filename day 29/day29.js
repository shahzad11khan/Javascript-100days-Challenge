//  create start from the array elements
//  1: *
// 3: ***
// 7: *******

let array = [2, 3, 4, 8];
let starCount = ""; // Variable to count the number of stars

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i]; j++) {
    starCount = starCount + "*";
  }
  console.log("Number of stars:", starCount);
  //   console.log(" ");
  starCount = " ";
}
