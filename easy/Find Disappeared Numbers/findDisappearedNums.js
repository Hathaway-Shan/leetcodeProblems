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
  const dictionary = new Set(array);
  const returnArr = [];

  for (let x = 1; x <= array.length; x++) {
    if (!dictionary.has(x)) {
      returnArr.push(x);
    }
  }
  return returnArr;
}

console.log(missingNumsSet(nums)); //returns expected

/*
This performs basically the same as above but cuts a for loop and looks a lot more clean

However neither of these are how we are intended to solve the problem
The actual solution is meant to us Math.abs()

Syntax: Math.abs(x)
Returns: The absolute value of x. If x is negative (including -0), returns -x. 
Otherwise, returns x. The result is therefore always a positive number or 0.
*/

function findDisappearedNumAbs(array) {
  const returnArr = [];

  for (let i = 0; i < array.length; i++) {
    //to get values for all the indexs in our array so we can operate on their contents
    const absoluteIndex = Math.abs(array[i]) - 1; //minus one to account for zero indexing

    /*
    console.log(absoluteIndex)
    returns:
    3 
    2
    1
    6
    7
    1 
    2 
    0
    */

    if (array[absoluteIndex] > 0) {
      /*
        inside this conditional we mark the duplicate index by changing all values 
        based on absolute index to negative numbers
        any index operated on twice like 1 & 2 above will be operated on twice 
        which turns the value positive
        */
      array[absoluteIndex] = array[absoluteIndex] * -1;
      /*
        3 testArr[3] = 7 becomes -7
        2 testArr[2] = 2 becomes -2
        1 testArr[1] = 3 becomes -3
        6 testArr[6] = 3 becomes -3
        7 testArr[7] = 1 becomes -1
        1 testArr[1] = -3 does not enter conditional
        2 testArr[2] = -2 does not enter conditional
        0 testArr[0] = 4 becomes -4
        
        **noteably since line 36 and 37 are duplicates aka their number is missing
        their contents are never operated on thus never set to negative
        
        testArr[4] is still 8
        testArr[5] is still 2
        */
    }
    /*
    console.log(testArr)
    returns:
    [-4,-3,-2,-7,8,2,-3,-1]
    when all operations complete
    */
  }
  /*
Now that numbers we operated on are marked negative we loop through the array again
checking for positive values and returning their indexes
*/

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      //remember to the correct index is at i + 1 because of zero indexing
      console.log(`missing number found at index ${i + 1}`); // returns 5 & 6
      returnArr.push(i + 1);
    }
  }
  return returnArr;
}
// console.log(findDisappearedNumAbs(nums));
