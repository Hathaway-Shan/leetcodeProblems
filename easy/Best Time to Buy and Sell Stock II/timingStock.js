/*
file path **node easy/Best\ Time\ to\ Buy\ and\ Sell\ Stock\ II/timingStock**

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Things Learned: 

find the lowest value in an array 
Math.min(...array)

find the that values index
indexOf(Math.min(...array))
note: always returns the index the lowest value occurs at

find highest value in an array
Math.max(...array)

find that values index
indexOf(Math.max(...array))
*/

const arr = [7, 1, 5, 3, 6, 4];

//we take in an array of prices representing the price of a stock on different days
var maxProfit = function (prices) {
  // guard for edge case the array is not long enough
  if (prices.length - 1 === 0) {
    return 0;
  }
  // set a variable equal to the first index in the array for comparison
  let purchasePrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    // compare current index against first index setting a new comparison variable if current index is less
    if (prices[i] < purchasePrice) {
      purchasePrice = prices[i];
    }

    // check current index minus result of previous comparison to see if it is greater 0 reseting to new value if true
    if (prices[i] - purchasePrice > profit) {
      profit = prices[i] - purchasePrice;
    }
  }
  // return the sell price minus the bought price as positive number profit
  return profit;
  // if a positive result cannot be achieved return 0
};

console.log(maxProfit(arr)); //returns 5 as expected
