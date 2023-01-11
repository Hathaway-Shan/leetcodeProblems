/*
file path **node easy/Sum\ 1D\ Array/runningSum**

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

const nums = [1, 2, 3, 4];

/*
The brute force solution to this is to code an old school reduce function
the problem with this approach is that by introducing this new variable sum we have opened ourselves to mutation
*/

function runningSum(array) {
  let newArr = [];
  sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    newArr.push(sum);
  }
  return newArr;
}

//we can deal with the possibility of mutation by using JS built in reduce() method
function runningSumReduce(array) {
  //since using reduce will be mutating we'll create a shallow copy to work with
  let newArr = array.slice();
  newArr.reduce(
    (accumulator, current, index, arr) => (arr[index] += accumulator)
  );
  return newArr;
}

console.log(runningSumReduce(nums));
