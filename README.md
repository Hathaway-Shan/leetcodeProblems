# Leetcode Lessons Learned and One liners

in the following sections I will detail some of the useful lessons and one liners I have picked up
solving LeetCode problems.

## Lessons Learned

1. **Number** and **parseInt** only have about 15 digits of decimal precision.
   If the number you're dealing with is larger than that you'll probably need to use **BigInt**,
   or do an array operation from the back that effects only a small portion.
   See Plus One and Add to Array-form of Integer for examples.

2. **Objects** and **Arrays** cannot be compared with === or == even if their contents are identical
   do it in a loop or something.

3. **ReGex** is almost always a mistake. If you're about to use Regex think for a moment if you could
   accomplish the same objective with a combination of **split()** and **join()**.

4. **Sliding Window Problems** use two pointers and a nested loop that runs in O(n) time.
   There are a couple of hints you can use to identify the need for a Sliding Window solution.
   Sliding window problems come in two types: bounded and dynamic.
   In a bounded problem you are given the size the window.
   In a dynamic problem you have to find the size of the window which will involve a leading and trailing edge.
   Examples of both can be found below.

- The problem will involve a data structure that is ordered and iterable like an array or a string
- You are looking for some subrange in that array/string, like a longest, shortest or target value.
- The biggest giveaway is that the thing you are looking for is often some kind of optimal, like the longest sequence or shortest sequence of something that satisfies a given condition exactly.

5. **Unorthodox For Loops** a for loop is written with four distinct parts:

```js
for (initialize statement; condition statement; increment statement) {
   //code block statement
}
```

Statements run in the following order:
**Initialize Statement:** executed before the loop starts.
**Condition Statement:** defines the condition for running the loop and checks it for each loop.
**Code Block Statement:** executes each time the condition for running the loop evaluates true.
**Increment Statement:** executes each time after the code block has been run.

variables declared outside of the body of a loop have greater scope than the loop.
variables declared inside the body of the loop are reinitialized with their declared value
each pass through.

However, you can declare multiple variables in your **Initialize Statement** seperated by commas.

```js
for (i = 0, j = array.length; i < j; i++, j--) {
  //two pointers with the initialize statement
}
```

you can also declare multiple loop conditions using the **&&** or **||** operators.

```js
for (i = 0; i < array.length && array[i] !== 4; i++) {
  //this can be used to cut down on breaks in the loop
}
```

you can also not declare an **Increment Statement** and move the that logic inside the body.

```js
for (i = 0, j = array.length; i < array.length && j > 0; ) {
  if (array[i] == array[i]) {
    //some logic
  }
  i++;
  j--;
}
```

examples of this syntax can be found in **Reverse a String** and **Reverse Vowels of a String**

## One Liners

- Convert a string to a number

  ```js:
  Number(stringName);
  ```

- Convert a number to a string

```js:
String(number)
```

- Convert all string number values in an array into numbers or vice versa

```js:
//convert to numbers
array.map(Number)
//convert to strings
array.map(String)
```

- Split all words in a string into an array of words

```js:
string.split(' ')
```

- Join an array of words together with no additional spaces

```js:
array.filter(element => element !== '').join(' ')
```

- Find the lowest numerical value in an array and its index

```js:
Math.min(...array)
```

for the index

```js:
indexOf(Math.min(...array))
```

note: always returns the index the lowest value occurs at

- Find highest value in an array

```js:
Math.max(...array)
```

for the index

```js:
indexOf(Math.max(...array))
```

- Join all elements of an array into a single string

```js:
//slicing will create a shallow copy avoiding mutation
const newArr = array.slice()
const singlePrint = newArr.join('')
// console.log(singlePrint) //returns '123456789'
```

- Populate a new Map with the number of times the value of a particular index occurs

```js:
hashMap.set(array[i], (hashMap.get(array[i]) || 0) + 1);
//array index is key, occurrence rate is the value
```

- Function to return keys of a map based on the contents of their value

```js:
function getKeyByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
            if (value === searchValue)
            return key;
        }
    }
```

- Create an Array from the keys or values of a Map

```js:
//keys
const mapKeyArray = Array.from(hashMap.keys())
//values
const mapValueArray = Array.from(hashMap.values())

//can also be sorted
const mapValueArray = Array.from(hashMap.values()).sort((a, b) => a - b);
```

- Create a Set from the keys or values of a Map two ways

```js:
//1.
const set = new Set(Array.from(hashMap.values()))
//2.
const set = new Set([...hashMap.values()])
```

- Return the first Key or Value of a Map

```js:
//return key
return hashMap.keys().next().value
//return value
return hashMap.value().next().value
```
