/*
file path **node easy/Sort\ Array\ by\ Increasing\ Frequency/frequencySort**

Given an array of integers, sort the array in increasing order based on the frequency
of the values. If multiple Values have the same frequency sort them in decreasing order.
    
return the sorted array
    
Example 1:
[1,1,2,2,2,3]
returns:
[3,1,1,2,2,2]
    
3 has a frequency of 1, 1 has a frequency of 2, 2 has a frequency of 3
    
Example 2:
[2,3,1,3,2]
returns:
[1,3,3,2,2]
    
2 and 3 both have a frequency of 2, so they are sorted in decreasing order
*/

const Arr = [2, 3, 1, 3, 2];

function sortByFrequency(array) {
  //1. create a new Map for numbers and their frequency
  let numberFrequency = new Map();

  for (let i = 0; i < array.length; i++) {
    //2. loop through the given array
    //       a. set the Map with the current number and the increment frequency.

    //sets key value pairs 'i' and either the the result of get that key or 0'
    //if the value exists we increment it
    numberFrequency.set(array[i], (numberFrequency.get(array[i]) || 0) + 1);
    /*
    console.log(numberFrequency);

    **without or statement
    Map(1) { 1 => undefined }
    **with or statement
    Map(1) { 1 => 0 }
    **with + 1 added
    Map(1) { 1 => 1 }
            
    **after all operations complete
    Map(3) { 1 => 2, 2 => 1, 3 => 1 }
    */
  }

  /*
  3. Sort the array
  sort() method compares two values 'a' and 'b'
  */

  return array.sort((a, b) => {
    if (numberFrequency.get(a) === numberFrequency.get(b)) {
      //        a. if the frequency of two indices is the same, return descending.
      return b - a;
    }
    //     b. return a-b (ascending) based on the values of the new Map
    return numberFrequency.get(a) - numberFrequency.get(b);
  });
}
console.log(sortByFrequency(Arr)); //returns expected
