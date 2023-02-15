/*

file path **node medium/Single\ Number\ I-III/singleNumber**

Given a non-empty array of integers nums, where every number appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example:
nums = [2,2,1]
returns: 1

Example2:
nums = [4,2,1,2,1]
returns: 4

*/
const nums = [4, 2, 1, 2, 1];
//I'm going to group problems 1-3 of this together
//since they all have similar solutions with minor changes to returns and problem params
//these changes will be listed alongside the problem version

//V1.0 base case
function findSingle(array) {
  //base condition if array contains only a single value based on constraints it is our single value
  if (array.length == 1) return array[0];

  //we create a Map to track the number occurrence
  const m = new Map();

  for (let i = 0; i < array.length; i++) {
    //if our Map contains a value already delete it
    //this could be modified if number occurrence was increased beyond the 2 limit
    //something like:
    //if (m.get(array[i] == x)) where x is the occurrence limit - 1
    if (m.has(array[i])) {
      m.delete(array[i]);
    } else {
      //if we don't have it set KVP into Map with occurrence as value
      m.set(array[i], (m.get(array[i]) || 0) + 1);
    }
  }
  //only one value does not delete itself based on constraints so return that
  return m.keys().next().value; //returns first key of Map
}

// console.log(findSingle(nums)); //returns expected

//V2.0 Same as base case but numbers that are not the single value we are looking for show up 3 times
const nums2 = [4, 2, 1, 2, 1, 2, 1];

function findSingleII(array) {
  //base case same as before
  if (array.length == 1) return array[0];

  const m = new Map();
  //we already planned for this in our first version so with minor tweaks the code remains the same
  for (let i = 0; i < array.length; i++) {
    //here we change our conditional as we planned about to account for our new limit of 3
    if (m.get(array[i] == 2)) {
      m.delete(array[i]);
    } else {
      //because we are counting the number times each number occurs we can always adjust the limit
      m.set(array[i], (m.get(array[i]) || 0) + 1);
    }
  }

  //same return statement for first and only key of the Map
  return m.keys().next().value;
}

// console.log(findSingleII(nums2)); //returns expected

/*
V3.0 The Same as V1.0 numbers occur 2 times but now we have two values that occur once 
return them as an array in any order
Example:
nums = [4,2,1,2,1,5]
returns: [4,5] || [5,4]
*/

const numsIII = [4, 2, 1, 2, 1, 5];

function findSingleIII(array) {
  //our base condition has changed since our return is different
  if (array.length == 2) return [array[0], array[1]];

  //Map code remains the same
  const m = new Map();
  for (let i = 0; i < array.length; i++) {
    if (m.has(array[i])) {
      m.delete(array[i]);
    } else {
      m.set(array[i], (m.get(array[i]) || 0) + 1);
    }
  }
  //our return is also different since cannot just reference the first/only value of the Map
  return [...m.keys()];
}

// console.log(findSingleIII(numsIII)); //returns expected;
