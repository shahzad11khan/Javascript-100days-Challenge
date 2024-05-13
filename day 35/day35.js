//  write a program for anagram
//  compire full string to string
let str1 = "slient";
let str2 = "listen";
let isresultture;

let convrtstrtoarr = str1.split("");
console.log(`convert first string to ${convrtstrtoarr}`);

let convrtstrtoarr2 = str2.split("");
console.log(`convert 2nd string to ${convrtstrtoarr2}`);

let sorttheconvrtstrtoarr = convrtstrtoarr.sort();
console.log(`sort the array: ${sorttheconvrtstrtoarr}`);

let joinarray = sorttheconvrtstrtoarr.join();

let sorttheconvrtstrtoarr2 = convrtstrtoarr2.sort();
console.log(`sort the array: ${sorttheconvrtstrtoarr2}`);

let joinarray2 = sorttheconvrtstrtoarr2.join();

if (joinarray === joinarray2) {
  console.log("Result is :", true);
} else {
  console.log("Result is :", false);
}
