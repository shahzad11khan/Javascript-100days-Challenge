// find the string length without space
// reverse the newstring
// repeat the reverse string
let str = "shahzad khan";
const withoutspace = str.split(" ").join("");
const totallength = withoutspace.length;
let reversestring = "";
// console.log(totallength)

for (let i = withoutspace.length - 1; i >= 0; i--) {
  // console.log(withoutspace[i])
  reversestring += withoutspace[i];
}
console.log(reversestring + reversestring);
