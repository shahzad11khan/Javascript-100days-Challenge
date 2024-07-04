let a = 0,
  b = 1,
  nxt = 0;
let arr = [];
let n = 10;

for (let i = 0; i < n; i++) {
  arr.push(a);
  nxt = a + b;
  a = b;
  b = nxt;
}

console.log("total :", nxt, "array :", arr);
