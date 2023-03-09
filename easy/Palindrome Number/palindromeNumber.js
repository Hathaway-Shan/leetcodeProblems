/*
file path **node easy/Palindrome\ Number/palindromeNumber**

Given an integer x
return true if x is a palindrome
a number is a palindrome if its digits read the same right to left and left to right
otherwise return false

Examples:
x = 121
returns true

x = 1231
returns false
*/

const xT = 121;
const xF = 1231;

function palindromeNumber(number) {
  //convert number to array of integers
  const arr = String(number).split("").map(Number);

  //create a two pointer for loop to check for palindrome
  for (let left = 0, right = arr.length - 1; left < right; ) {
    //if the left digit and right digit are the same move the pointers inward
    if (arr[left] == arr[right]) {
      left++;
      right--;
    }
    //if they don't match it's not a palindrome return false
    else {
      return false;
    }
  }
  //if we complete the loop we have verified a palindrome return true
  return true;
}

console.log(palindromeNumber(xF)); //returns expected both test cases
