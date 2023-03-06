/*
file path **node easy/Binary\ Search/binarySearch**

Given an array of integers which is sorted in ascending order

and a target integer, write a function to search target in the array. 

If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example:
array = [-1,0,3,5,9,12]
target = 9
returns 4 **the value 9 is found at index 4 in this array

Example2:
array = [-1,0,3,5,9,12]
target = 2
returns -1 **the value 2 does not exist in this array
*/
arrayT = [-1, 0, 3, 5, 9, 12];
targetT = 9;

arrayF = [-1, 0, 3, 5, 9, 12];
targetF = 2;

function binarySearch(array, target) {
  //since we are working with an ascending ordered array we can implement a binary search
  //for a binary search we will need:

  //a far left
  let left = 0;
  //a middle
  let middle = 0;
  //and a far right
  let right = array.length - 1;

  //next in a while loop we need to check
  //if the middle pointer is greater than our target number
  //if so we drop into the left side of the array
  //if the middle pointer is less than our target number
  //if so we drop into the right side of the array
  //return -1 if no match is found

  while (left <= right) {
    //we define the math of the middle so that it will adjust with each loop
    middle = Math.floor((left + right) / 2);

    //compare middle for a match
    //and also to see which side we need to drop into
    if (target === array[middle]) {
      console.log(`target ${target} found at index ${middle}`);
      return middle;
    }

    //search right side of the array
    if (target > array[middle]) {
      console.log("searching right side of array...");
      //assign end index and increase the index by 1 to narrow search
      left = middle + 1;
    }
    //search left side of the array
    if (target < array[middle]) {
      console.log("searching left side of the array...");
      //assign start index and decrement the index by 1 to narrow search
      right = middle - 1;
    }
    //if no match is found we loop again
    else {
      console.log("no match found this iteration looping again...");
    }
  }
  //if we never find a match
  console.log(
    `no matches for ${target} found in this array of ${array[0]} to ${
      array[array.length - 1]
    }`
  );
  return -1;
}

console.log(binarySearch(arrayF, targetF)); //returns expected both test cases
