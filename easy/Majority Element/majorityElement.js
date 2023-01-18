/*
file path **node easy/Majority\ Element/majorityElement**

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example:
nums = [2,2,1,1,1,2,2]
returns: 2
*/

/*
At first glace this problem feels very similar to Sort Array by Increasing Frequency,
which we solved using a hashmap dictionary. So likely we can take the same approach here.
*/

const nums = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(array) {
  //we will need a majority to measure against
  const majority = Math.ceil(nums.length / 2); //returns 2 on length 3 array

  //1. create a new Map for numbers and their frequency
  let numberFrequency = new Map();

  for (let i = 0; i < nums.length; i++) {
    //set Map with the current number and increment frequency
    numberFrequency.set(nums[i], (numberFrequency.get(nums[i]) || 0) + 1);

    //we now have all the information we need to check against majority
    if (numberFrequency.get(nums[i]) === majority) {
      return nums[i];
    }
  }
}

console.log(majorityElement(nums)); //returns expected

/*
This can also be solved in 0(n) time with a single pass for loop
and no hashmap
It is slightly less performant than the above
this method: 71ms speed 43.8mb memory 80% 58%
above method: 69ms speed 43.3 memory 84% 81%
*/

function majorityElementLoop(array) {
  let majority;
  let majorityCount = 0;

  for (const number of array) {
    //this starts the code and resets the value of number whenever majorityCount is equal to 0
    if (majorityCount === 0) {
      majority = number;
      //the first time we set a new number we increment
      majorityCount++;
      //if the next number matches we increment again
    } else if (majority === number) {
      majorityCount++;
    } else {
      //if the next number doesn't match we decrement
      //if this brings majority count to 0 we reset the value of majority to the number of the current index
      majorityCount--;
    }
  }
  //we return the last of majority with a positive majorityCount value
  return majority;
}
