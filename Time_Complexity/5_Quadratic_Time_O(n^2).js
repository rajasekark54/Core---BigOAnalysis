/*
Approaches against Quadratic Time Complexity (O(n^2)):

PLEASE FIND THE PROBLEM BY ACCESSING THE LINK BELOW UNDER EXAMPLE

Example 1: Insertion Sort
Link: https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/4_InsertionSort.test.js
Notes:

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time by repeatedly inserting the next element into its correct position in the sorted part of the array.
Notes:
Insertion Sort has a worst-case time complexity of O(n^2) when the input array is in reverse order.
Despite its simplicity, Insertion Sort is efficient for small datasets or nearly sorted arrays due to its adaptive nature.

Key Takeaway: 

Insertion Sort's efficiency lies in its ability to efficiently sort small or nearly sorted arrays, making it suitable for certain types of input data.

Example 1: Selection Sort
Link: https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/5_SelectionSort.test.js
Notes:

Selection Sort is an in-place comparison sorting algorithm that divides the input array into two parts: the sorted part at the beginning and the unsorted part at the end. It repeatedly selects the minimum element from the unsorted part and swaps it with the first unsorted element.
Notes:
Selection Sort has a worst-case time complexity of O(n^2) as it always performs a fixed number of comparisons, regardless of the input order.
Despite its simplicity, Selection Sort is not suitable for large datasets due to its quadratic time complexity.

Key Takeaway: 

Selection Sort's simplicity makes it easy to implement, but its inefficiency for large datasets limits its practical use compared to more efficient sorting algorithms.

Example 1: Bubble Sort:
Link: https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/3_BubbleSort.test.js
Notes: 

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
Bubble Sort has a worst-case time complexity of O(n^2) as it requires multiple passes through the array, potentially swapping each element with every other element.
Despite its simplicity, Bubble Sort is not efficient for large datasets due to its quadratic time complexity and lack of adaptability.

Key Takeaway: 

Bubble Sort's straightforward implementation makes it easy to understand, but its poor performance for large datasets makes it unsuitable for practical use in most cases.
These approaches offer simple solutions to sorting problems but suffer from inefficient time complexity for large datasets. They are often used for educational purposes or in situations where simplicity is prioritized over efficiency.

*/
