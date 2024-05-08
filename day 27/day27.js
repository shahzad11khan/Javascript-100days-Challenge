//  indirect recursion
// DSA point of you question

// simple example
let money = 30;
let totalapple = 0;
const apple = (x) => {
  if (x > 0) {
    console.log(`I have ${x} RS ${totalapple}`);
    buyapple(x);
  } else {
    console.log(`Money is finished`);
  }
};

const buyapple = (y) => {
  totalapple++;
  console.log(`Buy Apple ${totalapple}`);
  apple(y - 10);
};

apple(money);
