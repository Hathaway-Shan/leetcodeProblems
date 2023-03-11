/*
file path **node medium/Longest\ Substring/longestSubstring**

Given a string s, find the length of the longest substring without repeating characters.

This is a sliding windows problem with a dynamic window
meaning we are not given a specific window size with which to examine the string or array
so we need make our window adjustable to find the value we wish to return.

Example:
s = "abccccdd"
returns: 3 -'abc' is the longest possible non repeating substring
*/

const s = "abcccdd";

function longestSubstring(string) {
  //base case
  if (string.length === 0) return 0;
  if (string.length === 1) return 1;

  //this is a sliding window problem with a dynamic window size
  //in order to solve we'll need to set up the problem

  //a set to store characters
  const set = new Set();

  //a left pointer representing a trailing edge
  let left = 0;
  //a right pointer representing a leading edge
  let right = 0;
  //a measure of the longest substring
  let maxLen = 0;

  //loop through the provided string
  while (right < string.length) {
    //if the value of our leading edge exists in the Set delete the trailing edge value and increment left
    if (set.has(string[right])) {
      set.delete(string[left]);
      left++;
    }
    //if not add the current character to the set and move the leading edge forward by incrementing right
    else {
      set.add(string[right]);
      right++;
      //reset the value of our max length if the sets size is larger
      maxLen = Math.max(maxLen, set.size);
    }
  }
  //return the highest value found by maxLen comparison
  return maxLen;
}

console.log(longestSubstring(s)); //returns expected
