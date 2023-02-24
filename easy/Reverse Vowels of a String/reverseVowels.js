/*
  file path **node easy/Reverse\ Vowels\ of\ a\ String/reverseVowels**

  Given a string s, reverse only all the vowels in the string and return it.

  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once

  Example:
  s = 'hello'
  return = 'holle'
  */

const s = "hello";

function reverseVowels(string) {
  //base condition
  if (string.length <= 1) return string;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  //we'll split the string into an array to work on
  let arr = string.split("");

  //we can declare multiple initialize statements in a for loop
  //we also don't need to declare an increment statement
  for (i = 0, y = string.length - 1; i < y; ) {
    //if we have two matches reverse their positions
    if (vowels.has(arr[i]) && vowels.has(arr[y])) {
      [arr[i], arr[y]] = [arr[y], arr[i]];
      i++;
      y--;
    }
    //if our left index is a match but our right is not decrement the right index
    else if (vowels.has(arr[i]) && !vowels.has(arr[y])) {
      y--;
    }
    //if the right index is a match and the left is not increment the left
    else {
      i++;
    }
  }
  //rejoin the array and return it as a string
  return arr.join("");
}

console.log(reverseVowels(s)); //returns expected
