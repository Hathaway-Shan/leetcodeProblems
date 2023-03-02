/*
file path **node easy/Contains\ Duplicate\ II/containsDupII**

Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array 
where nums[i] == nums[j] 
and abs(i - j) <= k.

Example:
nums = [1,2,3,1]
k = 3
returns true 
nums[0] && nums[3] == 1 
Math.abs(0 - 3) == 3 <= k

Example2:
nums = [1,2,3,1,2,3]
k = 2
returns false
we have matches at nums[0] & nums[3], nums[1] & nums[4], nums[2] & nums[5]
however
Math.abs(0 -3), Math.abs(1 - 4); Math.abs(2 - 5) !== 2 == k

Constraints:
nums.length is between 1 and 100000
*/

const numsT = [1, 2, 3, 1];
const kT = 3;
const numsF = [1, 2, 3, 1, 2, 3];
const kF = 2;

//Similar to the first Contains Duplicate problem the trap here is to go for a nested for loop
//this approach will actually time out here since the length of the nums array can be huge
//So we're going to need to do it in one pass, which will require a Map();

function containsDupII(array, number) {
  //base condition we need two distinct indices to operate
  if (array.length == 1) return false;

  const m = new Map();

  for (let i = 0; i < array.length; i++) {
    //if we already have the array[i] in our map we can check to see if it matches our conditions
    if (m.has(array[i]) && Math.abs(m.get(array[i]) - i) <= number) return true;

    //otherwise we set the value of array[i] as the key with i as its value
    m.set(array[i], i);
  }
  //and if we never evaluated to true in the for loop return false
  return false;
}

console.log(containsDupII(numsF, kF)); //returns expected both test cases
