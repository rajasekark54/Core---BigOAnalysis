// File: Factorial_Time_O(n!).js

/**
 * Example of O(n!) time complexity.
 * Generates all permutations of a given array using recursion.
 *
 * @param {number[]} arr - Input array
 * @returns {number[][]} - Array of all permutations
 */
function generatePermutations(arr) {
  const permutations = [];

  /**
   * Helper function to generate permutations recursively.
   *
   * @param {number[]} prefix - Prefix for the permutation
   * @param {number[]} remaining - Remaining elements for permutation
   */
  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      permutations.push(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const nextPrefix = prefix.concat(remaining[i]);
        const nextRemaining = remaining
          .slice(0, i)
          .concat(remaining.slice(i + 1));
        permute(nextPrefix, nextRemaining);
      }
    }
  }

  permute([], arr);
  return permutations;
}

// Example usage:
const arr = [1, 2, 3];
const allPermutations = generatePermutations(arr);
console.log("All Permutations:", allPermutations);
/* 
All Permutations: [
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/

/*
Notes:

Factorial time complexity (O(n!)) denotes an algorithm whose time requirement grows factorially with the size of the input.
In the example, we generate all permutations of a given array. The number of permutations for an array of length n is n!, which grows very rapidly as n increases.
This algorithm recursively generates all possible permutations by trying all possible combinations of elements, resulting in a factorial number of recursive calls.
Key Takeaway:

Algorithms with factorial time complexity are highly inefficient and impractical for even moderately large inputs.
Factorial time complexity often arises in problems involving exhaustive search or combinatorial optimization, where all possible combinations or permutations need to be considered.
It's crucial to understand the implications of factorial time complexity and seek alternative approaches for solving problems with more efficient algorithms whenever possible.
*/
