const fizzBuzz = require("./fizzbuzz");
const fizzBuzzV2 = require("./fizzbuzz.v2/fizzbuzz.v2");

const checkReturnsEmptyArray = (func) => {
    let arr = func();
    expect(arr).toStrictEqual([]);
};

describe('FizzBuzz Tests', () => {
    test.each([
        [fizzBuzz, 'Returns an empty array when given no values'],
        [fizzBuzzV2, 'Returns an empty array when given no values']
    ])('%s', (func, description) => {
        checkReturnsEmptyArray(func);
    });

    test('Returns ["1", "2", "Fizz"] when given 3', () => {
        const arr = fizzBuzz(3);
        expect(arr).toStrictEqual(["1", "2", "Fizz"]);
    });

    test('Returns ["1", "2", "Fizz"] when given 3 for v2', () => {
        const arr = fizzBuzzV2(3);
        expect(arr).toStrictEqual(["1", "2", "Fizz"]);
    });

    test('Returns ["1", "2", "Fizz"] when given 3 for v2', () => {
        const arr = fizzBuzzV2(15);
        expect(arr).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});
