/* 
file path **node easy/Fibonacci\ Number/fibonacciNumber**
Fibonacci numbers their position in the sequence designated as f(n) and beginning with 0 & 1
form a pattern where each number is the sum of the previous two

constraints:
n will always be a number between 0 and 30

so 
f(0) = 0
f(1) = 1
f(2) = f(0) + f(1) **1
f(3) = f(1) + f(2) **2
f(4) = f(2) + f(3) **3
f(5) = f(3) + f(4) **5
f(6) = f(4) + f(5) **8 etc...

given the f(n) as argument n
return the sum of two f(n)'s that it represents

ie:
n = 6
output should be 8
*/

function fibonacciNumbers(n) {
  /*
    at first thought the f(n) when written up looks a lot like an array
    it's even 0 indexed 
    since the output we are looking to return is equal to the index we could use a Map
  */
  const fibonacciIndex = new Map();

  //we know the first two positions in the Map are 0, 0 and 0, 1 so lets set those
  fibonacciIndex.set(0, 0);
  fibonacciIndex.set(1, 1);

  //i should be set to 2 as index 0 and 1 are already being represented by number1 and number2
  let i = 2;

  //these variables need to be placed outside of the scope of the while loop to prevent infinite run
  let number1 = 0;
  let number2 = 1;

  while (i <= 30) {
    let sum = number1 + number2;

    fibonacciIndex.set(i, sum);
    if (i <= 30) {
      number1 = number2;
      number2 = sum;
      i++;
    }
  }
  // console.log(fibonacciIndex)
  /*
  returns:
  Map(31) {
  0 => 0,
  1 => 1,
  2 => 1,
  3 => 2,
  4 => 3,
  5 => 5,
  6 => 8,
  7 => 13,
  8 => 21,
  9 => 34,
  10 => 55, etc...
  */

  //since we now have a working Map of the fibonacci sequence we can just lookup what we need the with get() method
  return fibonacciIndex.get(n); //returns expected
}

/*
This method is fast but memory intense it can be made less so by changing the set()'s on 35 and 36 to if statements
**if(n === 0) return 0;
**if(n === 1) return 1;
but this way we get a complete Map of Fibonacci values which is cool

That being said of course there is an easier formulaic way to do this
*/

function quickFibonacci(n) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    /*
    the key here is knowing that arrays cannot have a negative index
    if we know that we can build an array from [0,1] inside a standard for loop
    by pushing the sum of i - 1 and i - 2
    */
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
  // console.log(fibonacciArray);
  /*
  returns:
  [0,1,1,2,3,5,8,13,21] etc..
  */
  return fibonacciArray[n];
}

console.log(quickFibonacci(30));

/*
my best solution is actually a blend of the two methods
*/

function fastFib(n) {
  const fibonacciIndex = new Map();

  //like with the array we set our first two values
  fibonacciIndex.set(0, 0);
  fibonacciIndex.set(1, 1);

  //i continues to be two because the first two spots are taken
  let i = 2;

  while (i <= 30) {
    //same as the array we use i - 1 and i - 2 to find our numbers but here we use the get() lookup method
    let sum = fibonacciIndex.get(i - 1) + fibonacciIndex.get(i - 2);

    fibonacciIndex.set(i, sum);
    //weirdly the if statement makes this faster I cannot explain why
    if (i <= 30) {
      i++;
    }
  }

  return fibonacciIndex.get(n);
}
