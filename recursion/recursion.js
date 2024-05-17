// recursion DSA point of you
// it must me end point
let count = 0;
function demo(num) {
  if (count > num) {
    // stoping point of recusion
    return;
  }
  console.log(`recursion : ${count}`);
  count++;
  demo(num);
}
demo(10);
