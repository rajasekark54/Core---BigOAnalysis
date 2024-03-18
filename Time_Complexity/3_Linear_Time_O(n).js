// File: Linear_Time_O(n).js

/**
 * Example of O(n) time complexity.
 * Finds the sum of all elements in the array.
 *
 * @param {number[]} arr - Input array
 * @returns {number} - Sum of all elements in the array
 */
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const sum = findSum(arr);
console.log("Sum:", sum);

/*
Notes:

The time taken to execute this function grows linearly with the size of the input array because it iterates through each element once.
*/
