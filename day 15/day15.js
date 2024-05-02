// how to remove duplication elements from an array
// 1st method

// let arr = [1, 12, 3, 4, 3, 5, 6, 3, 4, 7, 7, 8, 8];
// let NotRep = [];
// let Repeated = [];
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i])
//   for (let j = i + 1; j < arr.length; j++) {
//     // console.log(arr[j])
//     if (!NotRep.includes(arr[j])) {
//       console.log(`Not Repeat :`, arr[j]);
//       NotRep.push(arr[j]);
//       // return
//     } else {
//       console.log(`Repeat :`, arr[j]);
//       Repeated.push(arr[j]);
//     }
//   }
// }
// console.log("Repeated element : ", Repeated);
// console.log("Not Repeated element : ", NotRep);

// 2nd method

let arr = [1, 2, 3, 4, 10, 3, 4, 6, 6, 89, 5, 3, 10];

let unique = new Set(arr);
console.log(unique);
