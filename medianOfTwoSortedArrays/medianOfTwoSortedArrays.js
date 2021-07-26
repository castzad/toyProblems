/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000 */

var findMedianSortedArrays = function(nums1, nums2) {
  let joinedArray = nums1.concat(nums2)
  let median = Math.round(joinedArray.length / 2) - 1
  if (joinedArray.length % 2 === 1) {
    return joinedArray[median]
  } else {
    median = joinedArray[median] + joinedArray[median + 1]
    return median / 2
  }
};

module.exports = findMedianSortedArrays;
