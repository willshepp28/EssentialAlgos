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