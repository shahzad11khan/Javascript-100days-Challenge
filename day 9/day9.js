// my practice
// password length must be at least 8 character
// password have must 1 uppercase , lowercase , digit
// password not be empty
let password = "Shahzad khan1";
// let password = "";
const checkpassword = password.split(" ").join("");
console.log("Remove space from the middle: ", checkpassword);

if (checkpassword === "") {
  console.log("Enter password....!");
} else if (checkpassword.length < 8) {
  console.log("password length must be at least 8 characters");
} else if (!/[A-Z]/.test(checkpassword)) {
  console.log("Password must contain at least 1 uppercase letter");
} else if (!/[0-9]/.test(checkpassword)) {
  console.log("Password must contain at least 1 digit");
} else if (!/[a-z]/.test(checkpassword)) {
  console.log("Password must contain at least 1 lowercase letter");
} else {
  console.log("Everything is OK");
}
