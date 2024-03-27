// File: Linear_Space_O(n).js

/**
 * Example of O(n) space complexity.
 * Reverses an array without modifying the original array.
 *
 * @param {number[]} arr - Input array
 * @returns {number[]} - Reversed copy of the input array
 */
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log("Reversed Array:", reversedArray);

/*
Notes:

Linear space complexity (O(n)) means that the memory used grows linearly with the input size.
In the example, the function reverses an array without modifying the original array, resulting in additional memory usage proportional to the size of the input array.
Algorithms with linear space complexity typically involve storing each input element individually.
Key Takeaway:

Linear space complexity is achieved when the memory usage of an algorithm grows linearly with the input size.
Algorithms with linear space complexity may require additional memory proportional to the size of the input, making them less memory-efficient compared to constant space algorithms.
*/
