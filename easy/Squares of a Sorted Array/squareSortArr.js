/*
file path **node easy/Squares\ of\ a\ Sorted\ Array/squareSortArr**

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

example:
Input: nums = [-4,-1,0,3,10]
returns: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

const nums = [-4, -1, 0, 3, 10];

function squareAndSortArr(array) {
  /*
  At first glance this seems simple enough we need to:
  1. multiply each element of the array by itself for the square
  2. sort the result in ascending order (a - b)
  3. return the sorted result
  */

  //we will need an array to return
  const returnArr = [];

  //each element can be squared inside of a for loop
  for (let i = 0; i < array.length; i++) {
    returnArr.push(array[i] * array[i]);
  }
  // console.log(returnArr); // returns [ 16, 1, 0, 9, 100 ]
  //now that we know the numbers are being squared we can sort and return the array
  return returnArr.sort((a, b) => a - b);
}

// console.log(squareAndSortArr(nums)); // returns [ 0, 1, 9, 16, 100 ]

//This solution can further be simplified to one line using map()

function sortSquareOneLine(array) {
  return array.map((element) => element * element).sort((a, b) => a - b);
}
console.log(sortSquareOneLine(nums)); // returns expected
