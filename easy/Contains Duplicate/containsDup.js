/*
file path **node easy/Contains\ Duplicate/containsDup**

Given an integer array nums: 
Return true if any value appears at least twice in the array, 
return false if every element is distinct.
*/

//Initially this feels very similar to two sum, and indeed we can pass the test suite with a nested for loop

const nums = [1, 2, 3, 1];

function containsDuplicate(array) {
  let containsDuplicate = false;

  for (let i = 0; i < array.length; i++) {
    for (let y = i + 1; y < array.length; y++) {
      if (array[i] === array[y]) {
        containsDuplicate = true;
        console.log(`duplicate values found at ${array[i]} and ${array[y]}`);
        return containsDuplicate;
      }
    }
  }
  return containsDuplicate;
}

/*
However, this is not performant as the array becomes longer as nested for loops run at 0(n2) time which sucks.
Since a Two Sum approach worked for the initial pass perhaps the efficient solution is also the same lets try
a hashmap. 
*/

function containsDupHashTable(array) {
  const hashtable = {};
  let containsDuplicate = false;

  for (let i = 0; i < array.length; i++) {
    if (hashtable.hasOwnProperty(array[i])) {
      // console.log(`duplicate value found at ${array[i]}`);
      containsDuplicate = true;
      return containsDuplicate;
    }
    /*
    Beware index collision if this code is not placed after the conditional
    then our duplicate will overwrite the entry already in the hashtable with a new value
    */
    hashtable[array[i]] = i;
  }
  return containsDuplicate;
}

/*
Success! This brings us back to 0(n) time. 
1365ms runtime for a nested for loop becomes 100ms, although we do use more memory.
*/

console.log(containsDupHashTable(nums));
