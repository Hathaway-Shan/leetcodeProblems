/*
file path **node easy/Happy\ Number/happyNumber**

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

-Starting with any positive integer, replace the number by the sum of the squares of its digits.

-Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which 
does not include 1.

-Those numbers for which this process ends in 1 are happy.

-Return true if n is a happy number, and false if not.

Example:
n = 19
returns true
Explanation:
1 * 1 + 9 * 9 = 82
8 * 8 + 2 * 2 = 68
6 * 6 + 8 * 8 = 100
1 * 1 + 0 * 0 + 0 * 0 = 1
*/

function isHappy(n) {
  while (n !== 1) {
    //place the array inside the while loop to reset it's value each loop
    let returnArr = [];

    //convert n to individual digits
    const nString = String(n);

    //square those digits
    for (let i = 0; i < nString.length; i++) {
      const nDigit = Number(nString[i]);
      returnArr.push(nDigit * nDigit);
    }

    //sum the squares
    n = returnArr.reduce((a, b) => a + b, 0);

    //if n ever equals 4 we're entering an infinite loop
    //maybe a math proof thing?
    if (n === 4) {
      return false;
    }
  }

  return true;
}

console.log(isHappy(19)); //returns expected

//This method works but in a janky kind of broken way a more efficient solution would use a Set

function isHappySet(number) {
  //first we create a Set to check whether we've seen a value before
  const haveSeen = new Set();

  while (number !== 1) {
    let arr = [];

    //similar to our first pass solution we swap the input number to string in order to make it iterable
    const nString = String(number);

    for (let i = 0; i < nString.length; i++) {
      //then we flip the each index of the string back to a number to square it
      const nDigit = Number(nString[i]);
      //and push the result into a new array so we can sum it with reduce
      arr.push(nDigit * nDigit);
    }
    //we set number equal to the sum of the new array
    number = arr.reduce((a, b) => a + b, 0);

    //in a conditional we check if we have seen this value of number before
    if (haveSeen.has(number)) {
      //if yes we are entering a loop and we return false
      return false;
    } else {
      //if not we add the new value of number to our haveSeen Set
      haveSeen.add(number);
      //and reset arr to empty for the next pass through the while loop
      arr = [];
    }
  }
  //if we have passed through the while loop then number = 1 and we return true
  return true;
}

console.log(isHappySet(2)); //returns expected
