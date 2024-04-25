const string = "this is first challange in javascript";
console.log(finglongword(string));
function finglongword(string) {
  const word = string.split(" ");
  return word.reduce((a, b) => (b.length > a.length ? b : ""));
}
