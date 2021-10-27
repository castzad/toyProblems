/*
Write a funciton that takes in an array of integers and returns a sorted version of that array.
Use the Quick Sort algorithm to sort the array.

Example: 

Input: [3, 1]
Output: [1, 3]
*/

var quickSort = function(array) {
  // Create a helper function for traversing the array
  var quickSortHelper = function(array, start, end) {
    // Helper function takes in array, the starting index, and the ending index
    // If the start index is greater than or equal to the end index we will return from the function
    if (start >= end) {
      return;
    }
    // Declare our pivot index, left pointer, and right pointer
    let pivot = start;
    let left = start + 1;
    let right = end;
    // While the left pointer is less than or equal to the right pointer we traverse the array incrementing pointers as needed
    while (left <= right) {
      /* If the array at the left pointer is greater than the array at the pivot and the array at the right pointer is less than the array at the pivot,
      we will swap the values at the left and right pointers
      */
      if (array[left] > array[pivot] && array[right] < array[pivot]) {
        swap(array, left, right);
      }
      // If the array at the left pointer is less than the array at the pivot, increment the left pointer by one
      if (array[left] < array[pivot]) {
        left++;
      }
      // If the array at the right pointer is greater than the array at the pivot, decrement the right pointer by one
      if (array[right] > array[pivot]) {
        right--;
      }
    }
    // When the while loop ends, swap the values at the pivot and right pointer
    swap(array, pivot, right);
    // Now that our right pointer is pointing at what used to be our pivot, we determine which sub array (one on either side of the pivot) is smaller
    const leftSubarrayIsSmaller = right - 1 - start < end - (right + 1);
    if (leftSubarrayIsSmaller) {
      // Call the helper function on the smaller array, then the larger array
      quickSortHelper(array, start, right - 1);
      quickSortHelper(array, right + 1, end);
    } else {
      quickSortHelper(array, right + 1, end);
      quickSortHelper(array, start, right - 1);
    }
  }
  var swap = function(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // Invoke our helper function on our full array and then return in
  quickSortHelper(array, 0, array.length - 1);
  return array
}

module.exports = quickSort;