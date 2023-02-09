/*

file path **node medium/Remove\ Duplicates\ From\ Sorted\ Array\ II/removeDuplicates**

Given an integer array nums sorted in ascending order
remove some duplicates in-place such that each unique element appears at most twice.
The relative order of the elements should be kept the same.

Example:
nums = [1,1,1,2,2,3,]
returns [1,1,2,2,3]

*/

const numberArr = [1, 1, 1, 2, 2, 3];

//this is extremely similar to our Remove Array Values problems once again we can hit it from the back

function leavePairs(array) {
  //we'll need a way to keep track of the number of times a given value has occured
  let rate = 0;

  for (let i = array.length; i >= 0; i--) {
    //if we encounter a duplicate value we'll increment our rate variable
    if (array[i - 1] == array[i]) {
      rate++;
    }

    //if we encounter a duplicate and rate is higher than 2 we splice it out
    if (array[i - 1] == array[i] && rate >= 2) {
      array.splice(i, 1);
    }

    //if we encounter a new value we reset our rate since we are moving to a new set of values in the sorted array
    if (array[i - 1] !== array[i]) {
      rate = 0;
    }
  }

  return array;
}

console.log(leavePairs(numberArr)); //returns expected;
