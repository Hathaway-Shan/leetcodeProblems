/*
file path **node easy/Is\ Subsequence/isSubsequence**

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters
without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example:
s = 'abc'
t = 'ahbgdc'

returns true / 'a', 'b', 'c' are all in sequence
*/

const s = "abc";
const t = "ahbgdc";

function isSubsequence(s, t) {
  //guard for edge cases if s and t are both empty strings
  //could be simplified to s === t but that tanks performance by checking on each pass
  //the more specific we can make a guard for an edge case the better the performance
  if (s === "" && t === "") {
    return true;
  }

  //we set a variable equal to 0 and increment it each time we encounter a match between s[index] and t[index]
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    //inside of the loop we compare t[i] to s[sIndex] and increment sIndex if true
    if (t[i] === s[sIndex]) {
      sIndex++;
    }

    //if at any point sIndex (which is already 0 indexed) is equal to the length of s
    //then we have found a match for each character in s
    //and we return true
    if (sIndex === s.length) {
      return true;
    }
  }
  //if we never enter the conditional on line 38 and the loop completes there was not a match for all characters
  //and we return false
  return false;
}

console.log(isSubsequence(s, t)); //returns expected

//using the most syntactically brief version if would look something like

function subSequenceShort(s, t) {
  let x = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[x] === t[i]) {
      x++;
    }
  }
  //we remove the need for a conditional for the edge case s & t = '' by checking length in the return statement
  return x === s.length;
}
