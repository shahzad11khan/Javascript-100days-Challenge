// Create the Pair from the two two elements
function findNonOverlappingPairs(arr) {
  const pairs = [];
  const usedElements = new Set();

  for (let i = 0; i < arr.length - 1; i++) {
    if (usedElements.has(arr[i])) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (usedElements.has(arr[j])) continue;
      pairs.push([arr[i], arr[j]]);
      usedElements.add(arr[i]);
      usedElements.add(arr[j]);

      break; // Move to the next i after finding a pair
    }
  }

  // Check for any remaining element that is not used
  for (let i = 0; i < arr.length; i++) {
    if (!usedElements.has(arr[i])) {
      pairs.push([arr[i]]);
      break; // There can only be one such element
    }
  }

  return pairs;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const result = findNonOverlappingPairs(array);
console.log(result); // Output: [[1, 2], [3, 4],[5]]
