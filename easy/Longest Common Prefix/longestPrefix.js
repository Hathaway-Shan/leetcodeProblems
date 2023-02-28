/*
file path **node easy/Longest\ Common\ Prefix/longestPrefix**

Write a function to find the longest common prefix string amongst an array of strings.
A prefix is an affix which is placed before the stem of a word. 

If there is no common prefix, return an empty string "".

Example
strs = ["flower","flow","flight"]
returns: "fl"

Constraints:
strs array length 1 <= 200
strs[i] length 0 <= 200
strs[i] consists of only lowercase English letters.
*/

strs = ["flower", "flow", "flight"];

function longestCommonPrefix(array) {
  //base conditional
  //if we get nothing give nothing
  if (!strs.length) return "";

  //we'll use the first word of the array as a reference points for the others
  for (i = 0; i < array[0].length; i++) {
    //start at the second word of the array and check each subsequent word
    for (y = 1; y < array.length; y++) {
      //if the index of the current word doesn't match the corresponding index in the first word
      //slice up to the mismatch in our first word and return
      if (array[y][i] !== array[0][i]) {
        return array[0].slice(0, i);
      }
    }
  }
  //if no mismatches were found return the entire first word as a prefix
  return array[0];
}

// console.log(longestCommonPrefix(strs)); //returns expected

//oddly runs faster if we declare array[y] as it's own variable in the second for loop
//not sure why but worth noting.

/*
      Example:
      let current = array[y];

      if (current[i] !== array[0][i]) {
        return array[0].slice(0, i);
      }
      
      */

//This same logic can be implemented with a Map() for faster lookups

function longestPrefixMap(array) {
  //base conditional
  if (!strs.length) return "";

  const m = new Map();
  //populate the map with index of first word as key and char as value
  for (let i = 0; i < array[0].length; i++) {
    m.set(i, array[0][i]);
  }

  //m.size works as a stand in for array[0].length
  for (i = 0; i < m.size; i++) {
    for (y = 1; y < strs.length; y++) {
      //same logic as before but now we compare the lookup of current index in the Map of the first word
      if (array[y][i] !== m.get(i)) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

console.log(longestPrefixMap(strs));
