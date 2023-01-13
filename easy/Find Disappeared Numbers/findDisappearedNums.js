/*
file path **node easy/Find\ Disappeared\ Numbers/findDisappearedNums**

Given an array nums of n integers where nums[i] is in the range [1, n] 
return an array of all the integers in the range 1 through n that do not appear in nums.

Example:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
//First instinct this problem can be solved with a hashmap object

function findMissingNums(array) {
  const hashtable = {};
  const returnArr = [];

  for (let i = 0; i < array.length; i++) {
    //key: value found at array index
    //value: index
    hashtable[array[i]] = i;
  }

  //next we check those values against 1 through nums.length as we know that is the highest value
  for (let x = 1; x <= array.length; x++) {
    if (hashtable.hasOwnProperty(x)) {
      // console.log(`hashtable contains value ${x}`); //returns true on all but 5 & 6
    } else {
      // console.log(`hashtable does not contain value ${x}`); //returns true on 5 & 6
      returnArr.push(x);
    }
  }
  return returnArr;
}

// console.log(findMissingNums(nums)); //returns expected

/*
This is weirdly performant clocking in at 80% 115ms 52mb 49% on leetcode as a solution
However it is probably worth it to streamline down with Set() for the cleanest code
Which would look like this
*/

function missingNumsSet(array) {
  const dictionary = new Set(nums);
  const returnArr = [];

  for (let x = 1; x <= nums.length; x++) {
    if (!dictionary.has(x)) {
      returnArr.push(x);
    }
  }
  return returnArr;
}

// console.log(missingNumsSet(nums)); //returns expected

/*
This performs basically the same as above but cuts a for loop and looks a lot more clean

However neither of these are how we are intended to solve the problem
The actual solution is meant to us Math.abs()

Syntax: Math.abs(x)
Returns: The absolute value of x. If x is negative (including -0), returns -x. 
Otherwise, returns x. The result is therefore always a positive number or 0.

Specifically Math.abs() will return a negative value if it operates on a negative number
But if it operates on just a given number it will return positive
Using this we can filter the array by marking numbers that exist negative
*/

function findDisappearedNumAbs(array) {
  const result = [];
  console.log("line 76", array);
  array.forEach((number) => {
    const indexBasedOnThisValue = Math.abs(number) - 1;

    if (array[indexBasedOnThisValue] > 0) {
      array[indexBasedOnThisValue] = array[indexBasedOnThisValue] * -1;
    }
    console.log("line 83", array);
  });

  // Now that we've marked the array with negative numbers, loop through it again.

  for (let i = 0; i < array.length; i++) {
    // Check if the number at this position is positive or negative.
    // Since arrays are 0-indexed, we'll be off by one, so add 1 when we push to results.
    if (array[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}
console.log(findDisappearedNumAbs(nums));

//I don't understand this solution at all I'll work on it
