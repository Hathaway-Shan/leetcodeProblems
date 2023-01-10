/*
  file path **node easy/Plus\ One/plusOne**

  we take in an array of single digit numbers
  the task is to increment the array by +1 as if it was a whole number
  ie: 1999 would be become 2000
  return data must be displayed as a single digit array again
  ie: [1,9,9,9] becomes [2,0,0,0]

  constraints:
  the leftmost number will never begin with 0
  */

const arr = [1, 9];

var plusOne = function (digits) {
  //guard for edge case digits is empty
  if (digits === []) {
    return;
  }

  //beginning at the last index we check to see if the number is a nine
  let lastIndex = digits.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    //if it is not a nine we increment by one and return the array
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      //if it is a nine we set its value to 0 and check the next index
      digits[i] = 0;
    }
  }
  /*
  this deals with the edge case of digits being [9] 
  since there is no next number to increment and this only occurs when we have a single 9 
  we unshift a 1 to the left of the 0 and call it a day
  */
  digits.unshift(1);
  return digits;
};
