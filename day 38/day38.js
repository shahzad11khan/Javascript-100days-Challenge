// check anagram
let str = "shahzad";
let str1 = "hsazhda";
let count = {};
for (let ch of str) {
  //   console.log(ch);
  count[ch] = (count[ch] || 0) + 1;
  //   console.log(count[ch]);
}
console.log(count);

for (let item of str1) {
  if (!count[item]) {
    return false;
  } else {
    count[item] -= 1;
  }
}
console.log(count);
