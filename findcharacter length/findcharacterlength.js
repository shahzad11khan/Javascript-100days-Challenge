const str = "wertyuioasdfghjklziuyrcvhjkmcqwertyuimnbvcxcvbn";
let count = 0;
let count1 = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "b") {
    count++;
  } else if (str[i] === "c") {
    count1++;
  }
}

console.log("Number of 'b' in the string:", count, count1);
