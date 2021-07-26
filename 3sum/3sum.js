/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []
*/

var threeSum = function(nums) {
  //iterate over input array
  nums.forEach()
    //add array[i] with array[i + 1]
    //iterate over rest of array for num that when added to previous nums equals 0(or target)
      //push successfull combinations to result array
};

module.exports = threeSum;