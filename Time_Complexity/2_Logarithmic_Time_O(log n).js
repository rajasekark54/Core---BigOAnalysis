// File: Logarithmic_Time_O(log n).js

/**
 * Example of O(log n) time complexity.
 * Binary search algorithm.
 *
 * @param {number[]} arr - Sorted array
 * @param {number} target - Element to search for
 * @returns {number} - Index of the target element, or -1 if not found
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element not found
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = binarySearch(arr, target);
console.log("Index of", target + ":", index);

/*
Note:

Binary search reduces the search space by half with each iteration, making it more efficient than linear search for large datasets.

Logarithmic Vs Linear:
    While linear time complexity involves a linear relationship between the size of the input and the time taken, logarithmic time complexity indicates a decreasing growth rate as the input size increases, making it much faster for large datasets.

    Key difference: Linear time complexity involves iterating over each element in the input, while logarithmic time complexity involves reducing the search space or dividing the problem into smaller parts with each step, leading to a more efficient search.
*/
