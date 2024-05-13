// some and every function
let obj = [
  {
    name: "shahzad",
  },
  {
    name: "khan",
  },
];

let nm = "khan";

const userExistSomeFunction = obj.some((item) => item.name === nm);
const userExistEveryFunction = obj.every((item) => item.name === nm);

console.log(userExistSomeFunction ? "yes" : "no");
console.log(userExistEveryFunction ? "yes" : "no");
