/*

file path **node medium/Reverse\ Words\ in\ a\ String/reverseWordString**

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. 
The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note: that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

Example:
s = 'a good  example' <---- contains double space
returns 'example good a'
*/

const s = "a good  example";

//a naive approach might use have two major steps
//1. turn the string of s into an array of words
//2. reverse that array to filter for empty spaces and build the return printout

//that would look something like this:
function reverseWordString(string) {
  //to get our array of words we split on spaces between then
  const arr = string.split(" ");

  //not we can built our return statement in a backwards for loop
  let printout = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    //we filter out additional empty spaces that might have made it into the array
    if (arr[i] !== "") {
      //and add a space after each word
      printout += arr[i] + " ";
      //the final word needs no space
      if (i == 1) {
        printout + arr[0];
      }
    }
  }
  //trim removes trailing white space from the front and back of strings as an extra safety
  return printout.trim();
}

// console.log(reverseWordString(s)); //returns expected

//This approach works but memory is terrible and speed isn't great
//it turns out a more efficient solution is also a more succinct one
//everything we need can be done in one line

function reverseWordStringOneLine(string) {
  //we can just use a return statement without worrying about mutation since split makes a new array
  return (
    string
      //once again we split the words into an array of words on the spaces
      .split(" ")
      //then we filter any additional spaces that made it into the array out
      .filter((element) => element !== "")
      //reverse the new array
      .reverse()
      //join it back into a string
      .join(" ")
  );
}

// console.log(reverseWordStringOneLine(s)); //returns expected;
