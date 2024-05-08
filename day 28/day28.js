// Call stack
// head recursion
// tail recursion

const HeadRecursion = (x) => {
  console.log(`Head Recursion: ${x}`);
  if (x > 0) {
    HeadRecursion(x - 1);
  }
};

// let data = 5;
// HeadRecursion(data);

const TailRecursion = (x) => {
  if (x > 0) {
    TailRecursion(x - 1);
  }
  console.log(`Tail Recursion: ${x}`);
};

let data = 5;
HeadRecursion(data);
TailRecursion(data);
