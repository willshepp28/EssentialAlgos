const reverseString = require("./reverse_string");

test('Reverses an empty sting', () => {
    let input = []
    reverseString(input);
    expect(input).toStrictEqual([])
});

test('Reverse a longer string', () => {
    let inputArr = ["h","e","l","l","o"];

    reverseString(inputArr);
    console.log(inputArr)
    expect(inputArr).toStrictEqual(["o","l","l","e","h"]);
})