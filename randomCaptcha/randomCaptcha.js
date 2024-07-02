// Create a random captcha combination of digits and characters
const characters =
  "abcd67eopqrNOPQRSstuvwxyz01234ABCDEFGHIJKfghijklmnLMTU589VWXYZ";
let lengthOfCaptcha = 7;
let result = "";

for (let i = 0; i < lengthOfCaptcha; i++) {
  let randomNumber = Math.floor(Math.random() * characters.length);
  console.log(randomNumber); // it will return only digits
  result += characters.substring(randomNumber, randomNumber + 1);
}

console.log(result);
