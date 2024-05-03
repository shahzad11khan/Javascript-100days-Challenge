// how ot search element in an array DSA point of you question
let arr = [1, 2, 3, 4, 5, 6];
let po = 3;
for (i = 0; i < arr.length; i++) {
  if (arr[i] === po) {
    console.log(`inex : ${i} = Element: ${arr[i]}`);
    break;
  }
}
console.log(arr);
