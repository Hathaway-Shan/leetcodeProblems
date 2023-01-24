/*
file path **node easy/Isomorphic\ String/isomorphicString**

given two strings s and t write a program to determine if the two strings are isomorphic
a string is isometric if:
both strings are the same length
both strings contain the same number of unique characters
each unique character in one string replaces only one unique value in the other
 *two different unique values cannot both replace an 'a' for instance

examples:
s = 'add'
t = 'egg'
returns true *e and a replace one another and g and d do as well

s = 'foo'
t = 'bar'

returns false *a and r cannot both replace o

constraints:
the two strings will not be longer than 5 * 10 to the fourth length *50k
the two strings length will be identical
the two strings will contain the standard 128 ascii characters *includes space
*/

const s = "egg";
const t = "add";

function isIsomorphic(s, t) {
  /*
  we know from the constraints that the lengths will always be equal so we don't need to check it
  if we did we would just add a guard:
  if (s.length !== t.length) {
    return false
  }
  */

  //we can check value pairs by creating a dictionary using s[i] as the key to t[i] value
  let pairMap = new Map();

  for (let i = 0; i < s.length; i++) {
    //if a pair does not exists in the dictionary we make one with s value as key and t value as value
    if (!pairMap.get(s[i])) {
      pairMap.set(s[i], t[i]);
    } else {
      /*
          if a key and value do exits in the pair map
          but the value in the map !== the current value at t[i] our swap is not valid return false
           */
      if (pairMap.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }
  // console.log(pairMap) //Map(4) { 'b' => 'b', 'a' => 'a', 'd' => 'b', 'c' => 'a' }
  /*
  there is an edge case where a new key in s creates a duplicate value in pairMap
  ie:
  s = 'badc'
  t = 'baba'

  in this case b is the value of both itself and d
  likewise a is the value of both itself and c

  to properly check this we create a new Set() of the values of pairMap
  since Sets can contain no duplicate values if the size property of our New Set and our Pairmap
  are the same we know no values are pulling double duty and can return true
   */

  // const set = new Set(Array.from(pairMap.values()))
  // console.log(set) //Set(2) { 'b', 'a' }

  return new Set([...pairMap.values()]).size == pairMap.size;
}

console.log(isIsomorphic(s, t)); //returns expected
