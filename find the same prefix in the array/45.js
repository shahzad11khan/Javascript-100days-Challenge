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
