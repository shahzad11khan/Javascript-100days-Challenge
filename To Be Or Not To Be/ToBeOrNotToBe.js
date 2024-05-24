// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// 1  toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// 2 notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
var expect = function (val) {
  return {
    toBe: function (n) {
      if (val === n) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (n) {
      if (val !== n) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  const re = expect(5).toBe(5); // true
  console.log(re);
} catch (error) {
  console.error(error);
}

try {
  const res = expect(5).notToBe(5); // throws "Equal"
  console.log(res);
} catch (error) {
  console.error(error);
}
