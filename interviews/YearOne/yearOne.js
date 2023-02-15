/*

file path **node interviews/YearOne/yearOne**

We are a uniform factory. Each company that we service needs a complete set of uniform pieces with their custom logo. 
Each piece that we have ready is labeled with the company name and piece like this: “company1_shirt” or “company2_hat”.

Given an array uniformSet of clothing pieces,
and array uniformPieces of which pieces each company currently has,
return a string of the company name that is missing items from uniformSet
if a company isn’t missing any items, please return the string 'N/A'

Constraints:
The number of companies missing pieces will always be 1 || 0

Example:
uniformSet = [“hat”, “glasses”]
uniformPieces = [“company1_hat”, “company1_glasses”, “company2_hat”]

returns = 'company2'

Return a string of the company name that is missing items, if a company isn’t missing any items, please return N/A
*/

//test case 1
const uniformSet1 = ["hat", "glasses"];
const uniformPieces1 = ["company1_hat", "company1_glasses", "company2_hat"];

//test case 2
const uniformSet2 = ["shoe", "shirt"];
const uniformPieces2 = [
  "AstroCorp_shoe",
  "BetaCorp_hat",
  "CaliCorp_pant",
  "AstroCorp_shirt",
  "DeltaCorp_pant",
  "BetaCorp_shirt",
  "AstroCorp_belt",
  "DeltaCorp_shoe",
  "BetaCorp_belt",
  "BetaCorp_shoe",
  "CaliCorp_shirt",
  "CaliCorp_shoe",
  "AstroCorp_hat",
  "CaliCorp_belt",
  "CaliCorp_jacket",
  "DeltaCorp_belt",
  "DeltaCorp_pant",
  "AstroCorp_pant",
  "DeltaCorp_lanyard",
  "DeltaCorp_shirt",
];

//test case 3
const uniformSet3 = ["shoe", "shirt", "belt", "pant"];
const uniformPieces3 = [
  "AstroCorp_shoe",
  "BetaCorp_hat",
  "CaliCorp_pant",
  "AstroCorp_shirt",
  "DeltaCorp_pant",
  "BetaCorp_shirt",
  "AstroCorp_belt",
  "DeltaCorp_shoe",
  "BetaCorp_belt",
  "BetaCorp_shoe",
  "CaliCorp_shirt",
  "CaliCorp_shoe",
  "AstroCorp_hat",
  "CaliCorp_belt",
  "CaliCorp_jacket",
  "DeltaCorp_belt",
  "DeltaCorp_pant",
  "AstroCorp_pant",
  "DeltaCorp_lanyard",
  "DeltaCorp_shirt",
];

function missingCompany(set, pieces) {
  //we're going to need a Map or a data object to reference
  const m = new Map();
  //we need to break pieces into something we can actually navigate
  for (let i = 0; i < pieces.length; i++) {
    // let company = pieces[i].match(/^.*?(?=_)/g).toString();
    // let item = pieces[i]
    //   .match(/[^_]*$/g)
    //   .toString()
    //   .replace(/[,]/, "");

    let company = pieces[i].split("_")[0];
    let item = pieces[i].split("_")[1];

    if (!m.has(company)) {
      m.set(company, [item]);
    } else {
      m.get(company).push(item);
    }
  }
  // console.log(m); //returns Map(2) { 'company1' => [ 'hat', 'glasses' ], 'company2' => [ 'hat' ] }

  //since the sets do not include all possible items checking by length might return false positives
  //so we'll have to use the set array to check individual values with the lookups of our new Map
  for ([key, value] of m) {
    for (let i = 0; i < set.length; i++) {
      if (!value.includes(set[i])) {
        return `${key} does not have ${set[i]}`;
      }
    }
  }
  return "N/A";
}

// a more clean write up

function findMissingCompany(uniformSet, uniformPieces) {
  //we store all companies and their existing uniformPieces in a Map
  const m = new Map();

  for (let i = 0; i < uniformPieces.length; i++) {
    //we get the values for the company name and clothing item
    //by splitting on the underscore
    let company = uniformPieces[i].split("_")[0];
    let item = uniformPieces[i].split("_")[1];

    //if the company doesn't exist in the Map create it
    if (!m.has(company)) {
      m.set(company, [item]);
      //if it does exist push the new item into the value array
    } else {
      m.get(company).push(item);
    }
  }

  //Now we can loop through the keys and values of m
  for ([key, value] of m) {
    //we check the value array of each key contains all values of uniformSet
    for (let i = 0; i < uniformSet.length; i++) {
      //if it does not return the company who failed the condition
      if (!value.includes(uniformSet[i])) return `${key}`;
    }
  }
  //if matches were found for everything return the string 'N/A'
  return "N/A";
}

console.log(missingCompany(uniformSet3, uniformPieces3)); //passes all test cases
