// File: Exponential_Space_O(2^n).js

/**
 * Example of O(2^n) space complexity.
 * Generates all subsets of a given set using recursion.
 *
 * @param {number[]} set - Input set
 * @returns {number[][]} - Array of all subsets
 */
function generateSubsets(set) {
  const subsets = [];

  /**
   * Helper function to generate subsets recursively.
   *
   * @param {number[]} subset - Current subset being generated
   * @param {number} index - Index of the current element in the set
   */
  function generate(subset, index) {
    if (index === set.length) {
      subsets.push(subset.slice()); // Add a copy of the current subset
      return;
    }
    // Include the current element
    subset.push(set[index]);
    generate(subset, index + 1);
    // Exclude the current element
    subset.pop();
    generate(subset, index + 1);
  }

  generate([], 0); // Start with an empty subset and index 0
  return subsets;
}

// Example usage:
const set = [1, 2, 3];
const allSubsets = generateSubsets(set);
console.log("All Subsets:", allSubsets);
/*
All Subsets: [
  [ 1, 2, 3 ], [ 1, 2 ],
  [ 1, 3 ],    [ 1 ],
  [ 2, 3 ],    [ 2 ],
  [ 3 ],       []
]
*/

/*
Notes:

Exponential space complexity (O(2^n)) indicates that the memory usage grows exponentially with the input size.
In the example, the function generates all subsets of a given set using recursion. Each element in the set can either be included or excluded in each subset, resulting in a total of 2^n possible subsets.
Algorithms with exponential space complexity often involve recursive branching where each recursive call leads to a doubling of the number of recursive calls or memory allocations.
Key Takeaway:

Exponential space complexity is achieved when the memory usage grows exponentially with the input size.
Algorithms with exponential space complexity may quickly consume large amounts of memory, making them impractical or infeasible for large input sizes.
It's essential to analyze the space complexity of algorithms, especially those involving recursive branching, and consider optimizations or alternative approaches to reduce memory usage whenever possible.
 */
