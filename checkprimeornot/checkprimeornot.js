function prime(num) {
  if (num < 2) return "number is not prime";

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "number is not prime";
    }
  }

  return "number is prime";
}

let num = 13;
console.log(prime(num)); // Output: "number is not prime"
