// can we puse and resume the function
// answer is yes why not name of the funtion is gernerator
// if we add yield as well as call the function again the same time
function* gen() {
  console.log("generator function called....");
  yield 20;
  console.log("finishing the generator function.... execution");
}
let ge = gen();
console.log(ge.next());
console.log(ge.next());
