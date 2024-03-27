// File: Exponential_Time_O(2^n)_Fibonacci.js

/**
 * Example of O(2^n) time complexity.
 * Calculates the nth Fibonacci number recursively.
 *
 * @param {number} n - Index of the Fibonacci number to calculate
 * @returns {number} - Nth Fibonacci number
 */
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const n = 6; // Find the 6th Fibonacci number
const fibNumber = fibonacci(n);
console.log("Fibonacci number at index", n + ":", fibNumber);

/*
Notes:

Exponential time complexity (O(2^n)) signifies an algorithm whose time requirement doubles with each additional input.
In the example, we calculate the nth Fibonacci number recursively. The recursive approach leads to repeated calculations of the same Fibonacci numbers, resulting in an exponential increase in the number of function calls as n increases.
The Fibonacci sequence grows exponentially, and the recursive approach without memoization results in redundant calculations, making it highly inefficient for large values of n.
Key Takeaway:

Algorithms with exponential time complexity are extremely inefficient and impractical for large inputs.
Exponential time complexity often arises in recursive algorithms where the problem size doubles with each recursive call.
It's crucial to analyze the time complexity of algorithms and seek alternative approaches or optimizations to improve efficiency whenever possible, especially for problems with exponential time complexity.
*/
