/*
file path **node easy/Move\ Zeros/moveZeros**

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

const nums = [0, 2, 1, 0, 0, 3, 4];

function moveZeros(array) {
  /*
  in order to avoid operating on a shifting array we can work from the back
  that way if we encounter a zero we can remove it and place it behind us with pop()
  all without changing the index we are operating on
  */
  for (let i = array.length - 1; i >= 0; i--) {
    //if we encounter a 0 iterating from the back we cut it out with splice()
    if (array[i] === 0) {
      array.splice(i, 1);
      //and place a zero behind us with pop()
      array.push(0);
    }
  }
  return array;
  //returns [2,1,3,4,0,0,0]
}

console.log(moveZeros(nums));
