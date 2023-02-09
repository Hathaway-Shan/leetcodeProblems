/*
file path **node easy/Ransom\ Note/ransomNote**

Given two strings ransomNote and magazine,
return true if ransomNote can be constructed by using the letters from magazine 
and false otherwise.

Each letter in magazine can only be used once in ransomNote
but a type of letter can occur multiple times.

Example
ransomNote = "aa"
magazine = "baa"
returns: true
*/

const note = "aa";
const mag = "baa";

//there are a couple of different ways to solve this a brute force memory intense solution
//might look something like this:

function ransomChars(ransomNote, magazine) {
  //we'll need to sort both ransom note and magazine for our conditional logic later
  const sortedNote = ransomNote.split("").sort();
  const sortedMag = magazine.split("").sort();

  //we will also need a pointer to move through the note as we loop through the magazine
  let pointer = 0;

  //next we can loop through magazine and check if we have matches for all our ransomNote letters
  for (let i = 0; i < magazine.length; i++) {
    //to do this we increment pointer with each match
    if (magazine[i] == ransomNote[pointer]) {
      pointer++;
    }
    //if pointer ever equals the length of our ransom note we return true
    if (pointer == ransomNote.length) {
      return true;
    }
  }
  //otherwise if we pass through the loop without triggering the second conditional we return false
  return false;
}

// console.log(ransomChars(note, mag)); //returns expected

//This way works but is not very efficient either in terms of memory or speed
//for a more solid solution we're going to need a Map

function ransomCharsMap(ransomNote, magazine) {
  const m = new Map();

  //we'll populate the map with the characters of magazine as the keys
  //and the number of times they each occur as the value
  for (let i = 0; i < magazine.length; i++) {
    m.set(magazine[i], (m.get(magazine[i]) || 0) + 1);
  }

  //then in a second loop we'll go through the ransom note
  for (char of ransomNote) {
    //if no match is found we return false
    if (!m.get(char)) {
      return false;
    }

    //we delete the entry from our Map if the value goes to 0
    if (m.get(char) == 1) {
      m.delete(char);
    }

    //otherwise we decrement the value in the Map if we find a match
    else {
      m.set(char, m.get(char) - 1);
    }
  }

  //if we make it all the way through that loop then every letter in ransom note has a match
  return true;
}

// console.log(ransomCharsMap(note, mag)); //returns expected
