// sort array usng recursion

let myarray = [2, 3, 4, 5, 1];
// let myarray = [1, 2, 3, 4];
const alreadysorted = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      //   console.log("Array All Ready Sorted");
      return false;
    }
    // console.log("Array Is Not Sorted");
  }
  return true;
};

let i = 0;
let j = 1;
let newarray = [];

const checkarraysort = (array) => {
  //   return alreadysorted(array);
  if (alreadysorted(array)) {
    return array;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    return checkarraysort(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    return checkarraysort(array);
  }
};

const sortarray = checkarraysort(myarray);
console.log(sortarray);
