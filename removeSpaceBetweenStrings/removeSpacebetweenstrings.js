// remove space inbetween string also remove from left and right as well

let str1 = "Shahzad khan";
let str = "    Mern      stack     ";
let removespacestring1 = str1.trim().replace(/\s+/g, "");
let removespacestring2 = str.trim().replace(/\s+/g, "");
console.log(removespacestring1, removespacestring2);
