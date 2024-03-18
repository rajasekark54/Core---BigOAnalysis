// File: Constant_Time_O(1).js

/**
 * Example of O(1) time complexity.
 * Returns the first element of the array.
 *
 * @param {number[]} arr - Input array
 * @returns {number} - First element of the array
 */
function getFirstElement(arr) {
  return arr[0];
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const firstElement = getFirstElement(arr);
console.log("First Element:", firstElement);

/*
Notes:

Regardless of the size of the input array, the function executes in constant time because it performs a single operation (accessing the first element).
Key takeaway: Accessing a specific element in an array, performing basic arithmetic operations, or returning a constant value all have constant time complexity.

*/
