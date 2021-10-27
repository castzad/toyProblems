var assert = require('assert')
//findMedianSortedArrays = require('../medianOfTwoSortedArrays/medianOfTwoSortedArrays.js');
twoSum = require('../2sum/2sum.js');
quickSort = require('../quickSort/quickSort.js');

// Find Median Sorted Arrays Tests
// describe('findMedianSortedArrays', function() {
//   it('Should find median of two sorted arrays', function() {
//     assert.equal(findMedianSortedArrays([1, 2], [3]), 2)
//   }),
//   it('Should find median of two sorted arrays', function() {
//     assert.equal(findMedianSortedArrays([1,2], [3,4]), 2.5)
//   }),
//   it('Should find median of two sorted arrays', function() {
//     assert.equal(findMedianSortedArrays([2, 3, 4], [5, 6]), 4)
//   }),
//   it('Should find median of two sorted arrays', function() {
//     assert.equal(findMedianSortedArrays([3, 4, 5, 6], []), 4.5)
//   })
// })

// 2sum Tests
describe('2sum', function() {
  it('Should find indices of an array of nums', function() {
    assert.equal(JSON.stringify(twoSum([2, 7, 11, 15], 9)), JSON.stringify([0, 1]))
  })
})

// Quick Sort Tests
describe('quickSort', function () {
  it('Should sort an array using the quick sort algorithm', function () {
    assert.equal([quickSort([3, 1]), [1, 3]])
  })
})