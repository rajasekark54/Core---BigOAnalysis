// File: Quadratic_Space_O(n^2).js

/**
 * Example of O(n^2) space complexity.
 * Generates a matrix representing the multiplication table up to a given size.
 *
 * @param {number} size - Size of the multiplication table
 * @returns {number[][]} - Multiplication table matrix
 */
function generateMultiplicationTable(size) {
  const table = [];
  for (let i = 1; i <= size; i++) {
    table[i - 1] = [];
    for (let j = 1; j <= size; j++) {
      table[i - 1][j - 1] = i * j;
    }
  }
  return table;
}

// Example usage:
const size = 5; // Generate multiplication table up to size 5
const multiplicationTable = generateMultiplicationTable(size);
console.log("Multiplication Table:", multiplicationTable);
/*
Multiplication Table: [
  [ 1, 2, 3, 4, 5 ],
  [ 2, 4, 6, 8, 10 ],
  [ 3, 6, 9, 12, 15 ],
  [ 4, 8, 12, 16, 20 ],
  [ 5, 10, 15, 20, 25 ]
] 
*/

/*
Notes:

Quadratic space complexity (O(n^2)) indicates that the memory usage grows quadratically with the input size.
In the example, the function generates a multiplication table up to a given size by creating a matrix with dimensions size x size, resulting in O(n^2) space usage.
Algorithms with quadratic space complexity typically involve creating a two-dimensional array or matrix with dimensions dependent on the input size.
Key Takeaway:

Quadratic space complexity is achieved when the memory usage grows quadratically with the input size.
Algorithms with quadratic space complexity may require significant memory overhead, especially for large input sizes, making them less memory-efficient compared to algorithms with lower space complexities.
*/
