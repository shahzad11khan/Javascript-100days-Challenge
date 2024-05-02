// compire the string chatacters from the start using string
let str1 = "storey";
let str2 = "storye";
for (let i = 0; i < str1.length; i++) {
  // console.log(str1[i])
  for (let j = i; j <= i; j++) {
    if (str1[i] == str2[j]) {
      console.log(str1[i], " ", str2[j]);
    } else {
      return;
    }
  }
}
