/*
file path **node easy/Longest\ Palindrome/longestPalindrome**

Given a string s which consists of lowercase or uppercase letters
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example
s = "abccccdd"
returns: 7

Explanation
The longest palindrome that can be built is "dccaccd", whose length is 7.
*/

const s = "abccccdd";

function longestPalindrome(string) {
  //base conditional check
  if (string.length === 1) {
    return 1;
  }

  // the longest palindrome will be the sum of the all the even numbers
  // plus any odd numbers - 1 ie: 3 - 1 = 2 etc.

  let result = 0;
  let containsOdd = false;

  // we can set the number of times any given letter occurs with a new Map
  const m = new Map();

  for (let i = 0; i < string.length; i++) {
    m.set(string[i], (m.get(string[i]) || 0) + 1);
  }

  // then in a second loop we can evaluate those numbers on being even or odd
  for (let value of m.values()) {
    //if a value is odd we subtract one to make it even and add it to the result
    if (value % 2 !== 0) {
      result += value - 1;
      //we also flip our flag to make sure that we know s contains odd numbers
      containsOdd = true;
    }

    //if the current value in the Map is even it gets added to our result
    if (value % 2 === 0) {
      result += value;
    }
  }

  //finally we return the sum of all evens and truncated odds as result + 1 as a pivot if s contained odd numbers
  //otherwise we return the sum of all evens as result
  if (containsOdd) {
    return result + 1;
  } else {
    return result;
  }

  //can also be written
  // return containsOdd ? result + 1 : result;
}

// console.log(longestPalindrome(s)); //returns expected

//While this answer is comprehensive and also relatively performative due to instant lookups in the second loop
//it can also be done in a single for loop

function oneLoopLongest(string) {
  //still need a base case check
  if (string.length === 1) return 1;
  //this time instead of a map we will use a data object
  let result = 0;
  let dictionary = {};

  for (let char of string) {
    //once again we populate the object with incrementing values as we would a Map
    dictionary[char] = (dictionary[char] || 0) + 1;

    //this time in in the for loop we continuously check if the reference in the dictionary is even
    //if it is we increment our result by 2
    if (dictionary[char] % 2 == 0) result += 2;
  }
  // console.log(dictionary); //returns { a: 1, b: 1, c: 4, d: 2 }
  // console.log(result); //returns 6

  //now we can use the original length of the string to see if there were any odds instead of using a flag like above
  return string.length > result ? result + 1 : result;
}
//this is pretty close to an optimal solution clocking in at 98% speed 94% memory on leetcode
// console.log(oneLoopLongest(s)); //returns expected
