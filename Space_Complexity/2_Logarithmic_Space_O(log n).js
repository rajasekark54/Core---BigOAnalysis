// File: Logarithmic_Space_O(log n).js

/**
 * Example of O(log n) space complexity.
 * Finds the integer logarithm base 2 of a number.
 *
 * @param {number} n - Input number
 * @returns {number} - Integer logarithm base 2 of the number
 */
function log2(n) {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}

// Example usage:
const number = 16;
const logValue = log2(number);
console.log("Logarithm base 2 of", number + ":", logValue);

/*
Notes:

Logarithmic space complexity (O(log n)) indicates that the amount of memory used grows logarithmically with the input size.
In the example, the function calculates the integer logarithm base 2 of a number using a loop that iterates until the number becomes 1.
Algorithms with logarithmic space complexity typically involve dividing the input size by a constant factor in each iteration.
Key Takeaway:

Logarithmic space complexity is achieved when the memory usage of an algorithm grows logarithmically with the input size.
Algorithms with logarithmic space complexity are often efficient for problems involving divide-and-conquer or binary search techniques.
*/
