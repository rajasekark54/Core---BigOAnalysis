/*
PLEASE FIND THE PROBLEM BY ACCESSING THE LINK BELOW UNDER EXAMPLE

Example 1: Quicksort
LINK:   https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/6_QuickSort.test.js
Notes:

Quicksort is a highly efficient sorting algorithm based on the divide-and-conquer strategy.
It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
The sub-arrays are then recursively sorted. Unlike merge sort, quicksort sorts in place.
Quicksort has an average and best-case time complexity of O(N * log N), making it one of the fastest sorting algorithms available in practice.
However, its worst-case time complexity is O(N^2) when the pivot selection is poor, but this is rare in practice with proper implementation.
Key Takeaway:

Quicksort's log-linear time complexity makes it a preferred choice for sorting large datasets due to its speed and efficiency.

Example 2: Mergesort
LINK: https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/7_MergeSort.test.js
Notes:

Mergesort is a stable, comparison-based sorting algorithm that follows the divide-and-conquer approach.
It divides the input array into two halves, recursively sorts each half, and then merges them.
The time complexity of mergesort is always O(N * log N), regardless of the input data. It is consistent and does not suffer from worst-case scenarios.
Mergesort is efficient for sorting linked lists and external sorting applications where random access to data is expensive.
Key Takeaway:

Mergesort's log-linear time complexity ensures consistent performance and makes it suitable for various sorting scenarios, especially when worst-case behavior is a concern.

Example 2: Heapsort
LINK: https://github.com/rajasekark54/DataStructure-Algorithm/blob/master/src/7_Search_and_Sorting/8_1_MaxHeap.test.jss
Notes:

Heapsort is an in-place sorting algorithm that uses a binary heap data structure to sort elements.
It first builds a max-heap from the input array, then repeatedly extracts the maximum element from the heap and rebuilds the heap until the array is sorted.
Heapsort has a time complexity of O(N * log N) for both average and worst-case scenarios.
While not as popular as quicksort or mergesort in practice, heapsort has the advantage of being inplace and having a guaranteed worst-case time complexity.
Key Takeaway:

Heapsort's log-linear time complexity, along with its in-place sorting nature, makes it useful in scenarios where space efficiency is crucial, and worst-case performance needs to be guaranteed.
These sorting algorithms exemplify the efficiency achievable with log-linear time complexity, making them valuable tools for handling large datasets in various applications.

*/
