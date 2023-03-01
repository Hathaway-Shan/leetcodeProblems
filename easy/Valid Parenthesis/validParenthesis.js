/*

file path **node easy/Valid\ Parenthesis/validParenthesis**

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Examples:
s = '()[]{}'
returns true

s ='(]'
returns false

Constraints:
The s string will consist only of the bracket characters;
*/

//This is actually a stack problem
// the key is putting one half of our s brackets into a stack in JS you can use an array and pop for this
//and then validating it in the second half as we remove items from the back of the stack last in first out

const st = "()[]{}";
const sf = "(]";

function validParens(string) {
  //base conditional
  //if our string length is uneven we cannot make pairs
  if (string.length % 2 !== 0) return false;

  //we will need an empty array for our stack
  let arr = [];

  //we can use a map to set up a key value relationship between our opening and closing parens
  const m = new Map();
  m.set("{", "}");
  m.set("[", "]");
  m.set("(", ")");

  //now we'll loop through our string
  for (char of string) {
    //if we have an open parenthesis key then we push a closing parenthesis value into our stack
    if (m.get(char)) {
      arr.push(m.get(char));
    }
    //if we don't have an open parenthesis key then we need to validate for a closed parenthesis
    else {
      //if the character that is not an opening bracket matches the closing parenthesis we pushed into the stack
      //then we pop it off
      if (arr[arr.length - 1] == char) {
        arr.pop();
      }
      //if they are not a match then the parens are invalid
      else return false;
    }
  }

  //if the for loop executes completely then all parenthesis should be paired and our array stack should be empty
  return arr.length == 0;
}

console.log(validParens(sf)); //returns expected both test cases

//this process is weirdly faster if we create our Map in reverse
//with closing brackets as the key and open brackets as the value
