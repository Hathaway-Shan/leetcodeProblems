/*

file path **node interviews/reUp**

given an array, return a new array without manipulating the original that 

returns every single instance of a number in the order they occur.

Example:
inputArray = [1, 2, 2, 3, 5, 8, 3]
outputArray = [1, 2, 3, 5, 8]
*/

const arr = [1, 2, 2, 3, 5, 8, 3];

//this problem has a few different ways it can be approached

//1. basic for loop with conditional

function orderOccurrence(array) {
  // base condition
  if (array.length <= 1) {
    return array;
  }

  //new array for returning and comparison
  const returnArr = [];

  //build our array in occurrence order
  for (let i = 0; i < array.length; i++) {
    if (!returnArr.includes(array[i])) {
      returnArr.push(array[i]);
    }
  }

  return returnArr;
}

// console.log(orderOccurrence(arr)); //returns expected [ 1, 2, 3, 5, 8 ]

//2.reduce function with conditional logic
function orderOccurrenceReduce(array) {
  return array.reduce((a, b) => {
    if (!a.includes(b)) {
      a.push(b);
    }
    //comes back undefined without an explicit return
    return a;
  }, []);
}

// console.log(orderOccurrenceReduce(arr)); //returns expected

//3. using a Set

function orderOccurrenceSet(array) {
  const s = new Set();

  for (let i = 0; i < array.length; i++) {
    s.add(array[i]);
  }

  return [...s];
}

// console.log(orderOccurrenceSet(arr)); //returns expected
