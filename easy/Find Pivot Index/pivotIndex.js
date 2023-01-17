/*
file path **node easy/Find\ Pivot\ Index/pivotIndex**

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. 
If no such index exists, return -1.

Example:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

const nums = [1, 7, 3, 6, 5, 6];

function findPivotIndex(array) {
  //the key to solving this problem lies in the total sum of the array
  const totalArraySum = array.reduce((a, b) => a + b);
  /*
  we will also need a running sum to measure against it 
  Once the totalArraySum - runningSum - the current index is equal to the runningSum we have a pivot index
  */
  let runningSum = 0;

  /*
  because the problem specifies that we return the left most pivot we iterate forward in the array
  This means running sum can represent the running total of the left side
  */
  for (let i = 0; i < array.length; i++) {
    /*
    The logic here is a bit tricky but doing it this way saves us from having to do weird Math and division
    operations
    The most important bit of logic is that the += operation of runningSum must go after the conditional 
    in order to evaluate accurately, if placed before return will always be -1
    */
    if (totalArraySum - runningSum - array[i] === runningSum) {
      return i;
    }
    runningSum += array[i];
  }
  //finally we return -1 if no pivot index was found
  return -1;
}
//this is pretty close to the most efficient solution 99% speed 82% memory on leetcode
console.log(findPivotIndex(nums)); //returns expected
