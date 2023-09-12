const fizzBuzz = require("./fizzbuzz");
const fizzBuzzV2 = require("./fizzbuzz.v2/fizzbuzz.v2");

const returnsEmptyArr = (func) => {
    let arr = func();
    expect(arr).toStrictEqual([]);
};

describe('FizzBuzz Tests', () => {
    test.each([
        [fizzBuzz, 'Returns empty array for fizzBuzz'],
    ])('%s', (func, description) => {
        returnsEmptyArr(func);
    });

    test('Returns ["1", "2", "Fizz"] when given 3', () => {
        const arr = fizzBuzz(3);
        expect(arr).toStrictEqual(["1", "2", "Fizz"]);
    });

    test('Returns ["1", "2", "Fizz"] when given 3 for v2', () => {
        const arr = fizzBuzzV2(3);
        expect(arr).toStrictEqual(["1", "2", "Fizz"]);
    });
});