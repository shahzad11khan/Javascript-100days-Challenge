// combine 2 arrays using double while loop
// auto sorted array
let data1 = [3, 7, 12, 56, 90, 100];
let data2 = [4, 13, 45, 98];
let data3 = [];
let d1 = 0;
let d2 = 0;
while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    // data3[d3]=data1[d1]
    data3.push(data1[d1]);
    d1++;
  } else {
    // data3[d3] = data2[d2];
    data3.push(data2[d2]);
    d2++;
  }
  // d3++;
}
// If there are remaining elements in data1, append them to data3
while (d1 < data1.length) {
  //  data3[d3] = data1[d1];
  data3.push(data1[d1]);
  d1++;
}
// If there are remaining elements in data2, append them to data3
while (d2 < data2.length) {
  //  data3[d3] = data2[d2];
  data3.push(data2[d2]);
  d2++;
}
console.log(data3);
