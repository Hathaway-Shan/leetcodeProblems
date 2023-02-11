/*

file path **node easy/Valid\ Palindrome/isPalindrome**

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase
typically using all the original letters exactly once.

Example:
s = 'anagram'
t = 'nagaram'

returns true

*/

const string1 = "anagram";
const string2 = "nagaram";

/*
There are two ways to solve this problem one is a brute force method with array methods
*/

function isPalindromeArray(stringOne, stringTwo) {
  const sortStringOne = stringOne.split("").sort().join();
  const sortStringTwo = stringTwo.split("").sort().join();

  return sortStringOne == sortStringTwo;
}

// console.log(isPalindromeArray(string1, string2)); //returns expected
//which is quick to write but kind of a memory hog.

//The second method involved taking advantage of the instant lookups in a Map
//and uses logic almost exactly like Ransom Note

function isPalindromeMap(stringOne, stringTwo) {
  //create and populate a map with the number of times each character in the string occurs
  const m = new Map();

  for (let i = 0; i < stringOne.length; i++) {
    m.set(stringOne[i], (m.get(stringOne[i]) || 0) + 1);
  }

  //next we look up each character in the second string in our Map
  for (char of stringTwo) {
    //if the map doesn't have it we return false
    if (!m.has(char)) {
      return false;
    }
    //if the map has it but the value is 1 we delete the entry
    if (m.get(char) == 1) {
      m.delete(char);
    } else {
      //otherwise we decrement the value stored in the Map
      m.set(char, m.get(char) - 1);
    }
  }
  //if the Map is empty (size == 0) after the loop completes all letters have matches and the string are anagrams
  return m.size == 0;
}

// console.log(isPalindromeMap(string1, string2)); //returns expected;
