# Reverse String

## Description
This repository contains a solution for the [Reverse String](https://leetcode.com/problems/reverse-string/) problem on LeetCode.

### Problem Statement
Write a function that reverses an array of strings. The input array is given as an array of characters.

You must do this by modifying the input array in-place with O(1) extra memory.

### Examples

#### Example 1:
Input: `arrayOfStrings = ["h","e","l","l","o"]`  
Output: `["o","l","l","e","h"]`

## Solution

### Implementation: reverse_string.js

The solution to the problem is implemented in the `reverse_string.js` file. The function `reverseString` takes an input array of characters and reverses the order of its elements using a two-pointer approach.

```javascript
// reverse_string.js

const reverseString = function(arrayOfStrings) {
    // Create pointers
    let startIndex = 0;
    let endIndex = arrayOfStrings.length - 1;

    // Iterate through the string
    while (startIndex < endIndex) {
        // Swap characters at indexes
        let temporaryChar = arrayOfStrings[startIndex];
        arrayOfStrings[startIndex] = arrayOfStrings[endIndex];
        arrayOfStrings[endIndex] = temporaryChar;

        startIndex++;
        endIndex--;
    }
};

module.exports = reverseString;
```

### Unit Test: reverse_string.test.js

```javascript
const reverseString = require("./reverse_string");

test('Reverses an empty arry', () => {
    let arrayOfStrings = []
    reverseString(arrayOfStrings);
    expect(arrayOfStrings).toStrictEqual([])
});

test('Reverse a longer array of strings', () => {
    let arrayOfStrings = ["h","e","l","l","o"];

    reverseString(arrayOfStrings);
    console.log(arrayOfStrings)
    expect(arrayOfStrings).toStrictEqual(["o","l","l","e","h"]);
})
```

### Runtime

<img width="752" alt="Screenshot 2023-09-02 at 8 44 36 AM" src="https://github.com/willshepp28/EssentialAlgos/assets/28759252/500fda7f-8da5-44d7-80b6-3fd31764da25">


