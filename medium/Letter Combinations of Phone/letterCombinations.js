/*

file path **node medium/Letter\ Combinations\ of\ Phone/letterCombinations**

Given a string digits containing characters of integers 2-9  and up to 4 characters long
return an array of all possible letter combination pairs that the numbers of digits could represent.
Return the answer in any order.

The mapping of letters to digits is the same as a standard phone. 
Note: 1 does not map to any letters.

Example:
digits = '23'
returns ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/

/*
One of the keys to this problem lies in the fact that we have a constraint that the length of our digits input is capped at 4
this opens the door for a brutalist solution of nested loops 
this will pass the given test case. However, longer terms flattening out some of the nested logic would be preferable.
*/

const digits = "2345";

function findCombos(array) {
  //base case
  if (digits.length == 0) return [];

  //create a map containing 2-9 as keys
  //and letters of each key as an array of values
  //it's easier to hard code this than to create it
  const m = new Map();

  m.set("2", ["a", "b", "c"]);
  m.set("3", ["d", "e", "f"]);
  m.set("4", ["g", "h", "i"]);
  m.set("5", ["j", "k", "l"]);
  m.set("6", ["m", "n", "o"]);
  m.set("7", ["p", "q", "r", "s"]);
  m.set("8", ["t", "u", "v"]);
  m.set("9", ["w", "x", "y", "z"]);

  //Assuming we passed the base case we have at least a length of one so we can hard code a get of the first value
  let arrOne = m.get(digits[0]);

  //after that we are only going to get what we need based on conditional logic
  //so though the other arrays exist in the code they are simply declared unless needed
  let arrTwo;

  //if length is equal to or greater than 2 we need this value and its corresponding array
  //this logic applies to the other cases as well
  if (digits.length >= 2) {
    arrTwo = m.get(digits[1]);
  }

  let arrThree;

  if (digits.length >= 3) {
    arrThree = m.get(digits[2]);
  }

  let arrFour;

  if (digits.length >= 4) {
    arrFour = m.get(digits[3]);
  }

  //declaring an empty array as a return means there is a refactor that might use a map
  //but that's not the world we're living in so here we go
  const returnArr = [];

  //now we build an ungodly pyramid of nested loops to create this thing
  for (chars1 of arrOne) {
    if (digits.length === 1) {
      returnArr.push(chars1);
    }
    //if an array is declared but never given a value in our code above it is inherently falsy
    //we'll use this to determine how many nested loops deep we need to go
    if (arrTwo) {
      for (chars2 of arrTwo) {
        //we only need one array to push our final result so we will determine which loop should make that push
        //using the length of the digits string as the absolute limit we can limit the push to one loop
        if (digits.length === 2) {
          returnArr.push(chars1 + chars2);
        }
        if (arrThree) {
          for (chars3 of arrThree) {
            if (digits.length === 3) {
              returnArr.push(chars1 + chars2 + chars3);
            }
            if (arrFour) {
              for (chars4 of arrFour) {
                returnArr.push(chars1 + chars2 + chars3 + chars4);
              }
            }
          }
        }
      }
    }
  }

  return returnArr;
}

// console.log(findCombos(digits)); //returns expected
