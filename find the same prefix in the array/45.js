// find the same prefix in the array using js
// check only first character

const findprefex = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (j = i; j < array.length; j++) {
      var result = array[i][0] === array[j][0] ? true : false;
    }
    return result;
  }
};

console.log(findprefex(["hi", "hu", "iy"])); //true
console.log(findprefex(["hi", "iu", "py"])); // false
console.log(findprefex(["hi", "hi", "ht"])); // true

// combire first 2 character
const findPrefix = (array) => {
  if (array.length === 0) return false;

  const firstPrefix = array[0].substring(0, 2);
  console.log(firstPrefix);
  for (let i = 1; i < array.length; i++) {
    if (array[i].substring(0, 2) !== firstPrefix) {
      return false;
    }
  }
  return true; // All strings matched
};

console.log(findPrefix(["hi", "hu", "iy"])); // false
console.log(findPrefix(["hi", "iu", "py"])); // false
console.log(findPrefix(["hi", "hi", "ht"])); // true
console.log(findPrefix(["hello", "helicopter", "hero"])); // true
