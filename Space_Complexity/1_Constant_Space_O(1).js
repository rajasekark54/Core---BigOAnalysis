// File: Constant_Space_O(1).js

/**
 * Example of O(1) space complexity.
 * Find array index value
 *
 * @param {number[]} arr - Input array
 * @param {number} index1 - Index
 */
function findArrayIndexValue(arr, index) {
  return arr[index];
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const res = findArrayIndexValue(array, 2);
console.log("Array value for index 2 is :", res);

/*
Notes:

Constant space complexity (O(1)) means that the memory used by the algorithm remains constant, regardless of the input size.
In the example, the function return value for index which doesn't requiring additional memory.
Algorithms with constant space complexity are highly efficient and desirable as they do not require extra memory overhead.
Key Takeaway:

Constant space complexity is achieved when the memory usage of an algorithm remains constant irrespective of the input size.
Algorithms with constant space complexity are often preferred for their efficiency and minimal memory requirements.
*/
