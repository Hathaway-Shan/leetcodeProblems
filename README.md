# h1 Leetcode Lessons Learned and One liners

in the following sections I will detail some of the useful lessons and one liners I have picked up
solving LeetCode problems.

## h2 Lessons Learned

1. **Number** and **parseInt** only have about 15 digits of decimal precision.
   If the number you're dealing with is larger than that you'll need to find a different tactic.

## h2 One Liners

- Convert a string to a number

  ```js:
  Number(stringName);
  ```

- Convert a number to a string

```js:
String(number)
```

- Convert all string number values in an array into numbers

```js:
array.map(Number)
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
const newArr = array.slice().toString().split(',')
const singlePrint = newArr.join('')
// console.log(singlePrint) //returns '123456789'
```

- Populate a new Map with the number of times the value of a particular index occurs

```js:
hashMap.set(array[i], (array.get(array[i]) || 0) + 1)
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
