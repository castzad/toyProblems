var assert = require('assert')
findMedianSortedArrays = require('../medianOfTwoSortedArrays/medianOfTwoSortedArrays.js')

describe('findMedianSortedArrays', function() {
  it('Should find median of sorted arrays', function() {
    assert.equal(findMedianSortedArrays([1, 2], [3]), 2)
  })
})