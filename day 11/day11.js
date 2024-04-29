// check the the second string charactors are prasent in the string or not
let str1 = "shahzad";
let str2 = "ahzad";
let empty = false;
for (let i = 0; i < str1.length; i++) {
  // console.log(str1[i])
  for (let j = 0; j < str2.length; j++) {
    // console.log(str2[j])
    if (str1.includes(str2[j])) {
      // return true
      // console.log("true")
      empty = true;
    } else {
      empty = false;
      // return false
      // console.log("false")
    }
  }
}
console.log(empty);
