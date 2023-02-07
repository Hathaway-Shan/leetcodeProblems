/*
file path **node easy/First\ Unique\ Character/firstUnique**

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example:

s = "leetcode"
returns 0 'l' at index 0 is the first character to not match any other characters in the string.

Example 2:

s = "loveleetcode"
returns 2 'v' at index 2 is the first character to not match any other characters in the string.
*/

s = "loveleetcode";

function findUniqueChar(string) {
  //base condition
  if (string.length == 1) return 0;

  //we can measure the number of times a given character occurs by populating a Map
  const m = new Map();

  for (let i = 0; i < string.length; i++) {
    m.set(string[i], (m.get(string[i]) || 0) + 1);
  }

  //now that we have our map we can loop through the keys and value and return the first lookup to return 1

  for ([key, value] of m) {
    if (value == 1) {
      return s.indexOf(key);
    }
  }

  //if no value of 1 is found there is no unique character and we return -1;
  return -1;
}

console.log(findUniqueChar(s)); //returns expected
