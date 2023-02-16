/*
  file path **node easy/Add\ to\ Array-Form\ of\ Integer/addToArrayForm**

  The array-form of an integer num is an array representing its digits in left to right order.
  
  Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

  Example:
  num = [1,2,,0]
  k = 34
  return: [1,2,3,4]

  Constraints:
  num.length && k have a range of 1 to 10 to the 4th (10,000) 
  in plain English: these are potentially some chonkey boys
  */

const nums = [1, 2, 0, 0];
const k = 34;

/*
we can tell from constraints that the length of k and num can be greater than 2^53
this means we cannot accurately use methods like Number or parseInt for conversion
instead we will have to use BigInt

luckily our syntax and method will be basically identical to what we used in the 
BigInt solution for Plus One
*/

function addToArrayForm(array, number) {
  //join all array elements into string and type them BigInt and add our number from params also of type BigInt
  return (
    (BigInt(array.join("")) + BigInt(number))
      //change the type back to a string
      .toString()
      //split the string into an array of characters
      .split("")
      //map the characters to digits (often optional on leetcode)
      .map(Number)
  );
}

// console.log(addToArrayForm(nums, k)); //returns expected
