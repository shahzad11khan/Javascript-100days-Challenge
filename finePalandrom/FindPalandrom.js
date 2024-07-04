let str = "madam";
let len = str.length;
let msg = "it is palandrom";
console.log(len / 2);
for (let i = 0; i < len / 2; i++) {
  console.log(str[i]); //back characters
  console.log(str[len - 1 - i]); //back characters

  if (str[i] != str[len - 1 - i]) {
    msg = "it is not a palandrom";
  }
}
console.log(msg);
