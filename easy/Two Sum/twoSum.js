/*

file path **node easy/Two\ Sum/twoSum**

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
there are two ways to solve this problem the first brute force solution is iterative and involves using a nested for loop
the downsides are that nested for loops have a terrible 0(n) time being locked into 0(n2) time
*/
const testArray = [2, 7, 11, 15];

var twoSum = function (array, target) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // console.log('array[i] is: ', array[i]); //returns as expected
    for (let y = i + 1; y < array.length; y++) {
      if (array[i] + array[y] === target) {
        // console.log(`${array[i]} at index ${i} and ${array[y]} at index ${y} sum to ${target}`);
        result.push(i, y);
      }
    }
  }
  return result;
};

/*
The other approach involves using a hashtable for instant lookups based on a conditional and runs in 0(n) time
*/

var twoSumHashTable = function (array, target) {
  const hashtable = {};

  for (let i = 0; i < array.length; i++) {
    let compliment = target - array[i];
    // console.log("COMPLIMENT IS: ", compliment);
    /*
    returns:
    COMPLIMENT IS:  7 (9 - 2)
    COMPLIMENT IS:  2 (9 - 7)
    COMPLIMENT IS:  -2 (9 - 11)
    COMPLIMENT IS:  -6 (9 - 15)
    */

    if (hashtable.hasOwnProperty(compliment)) {
      /*
      hasOwnProperty is a method called on an object that takes a specific value as an argument
      and returns a boolean true or false if the object contains the value. 
      In this case we are checking to see if the pair value (compliment) of target minus array[i]
      at which point we can return.
      */
      return [hashtable[compliment], i];
    }
    hashtable[array[i]] = i;
  }
  // console.log("HASHTABLE IS: ", hashtable);
  /*
  returns:
  HASHTABLE IS:  {
    '2': 0,
    '7': 1,
    '11': 2,
    '15': 3
  }
  */
};

console.log(twoSumHashTable(testArray, 26)); //returns expected
