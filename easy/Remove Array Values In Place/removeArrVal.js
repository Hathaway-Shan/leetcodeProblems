/*
file path **node easy/Remove\ Array\ Values\ In\ Place/removeArrVal**

This will serve as a solution to both: 
Leetcode 26: Remove Duplicates from a Sorted Array
Leetcode 27: Remove Element

As they are both pretty similar problems with similar solutions.

Both problems ask that we sort an array in place (so mutation is a given)
and return our result on the left hand side of the array

Remove Duplicates asks that we remove all duplicate values in a sorted array
Example:
nums = [1,1,2]
returns [1,2]

Remove Element ask that we remove a specific value
Example:
nums = [1,2,3,4] value = 4
returns [1,2,3]

In both cases the operations has to be done in place so we cannot store the result in another array
and we cannot use any method that returns a new array
*/

const numberArr = [1, 1, 2, 2, 3, 3, 4, 4];

//the problem here is similar to what we encountered with Move Zeros
//in order for the operation to be done in place we will have to use Splice()
//however if we use Splice in the context of a normal for loop we lose track of the index we are working on
//so we'll hit it from the back

function removeElement(array, number) {
  //in place operation with no extra storage so its all taking place in one for loop
  for (let i = array.length; i >= 0; i--) {
    if (array[i] == number) {
      array.splice(i, 1);
    }
  }
  return array;
}

// console.log(removeElement(numberArr, 3)); //returns expected

//We can apply the same approach to removing duplicates by slightly tweaking the logic

function removeDups(array) {
  //once again in place so a single loop
  for (let i = array.length; i >= 0; i--) {
    //we check if the number ahead is the same as the one we are currently operating on
    //if it is we splice out the number we are currently operating on and repeat
    if (array[i - 1] == array[i]) {
      array.splice(i, 1);
    }
  }
  return array;
}

// console.log(removeDups(numberArr)); //returns expected

//The result can also be accomplished going from the front you just have to decrement i after you splice
//this is also less performant

function removeDupsFront(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] == array[i]) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// console.log(removeDupsFront(numberArr)); //returns expected
