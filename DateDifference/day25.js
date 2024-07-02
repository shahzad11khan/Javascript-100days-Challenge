// difference between 2 months
let data1 = "2024-01-23";
let data2 = "2024-05-23";

let d1 = new Date(data1);
// console.log(d1);
let d2 = new Date(data2);
// console.log(d2);

let differenceBetweenDates = Math.abs(d1 - d2);
console.log(differenceBetweenDates); // millisec
//      in one day                   hour * min * sec * millisec
let result = differenceBetweenDates / (24 * 60 * 60 * 1000);
console.log(result);
