// flat using js and find unique
let arr = [1, 2, 3, 4, 10, [3, 4, [6, 6, 89, 5, 3], 10]];
let newset = arr.flat(Infinity);
console.log(newset);

let unique = new Set(newset);
console.log(unique);
