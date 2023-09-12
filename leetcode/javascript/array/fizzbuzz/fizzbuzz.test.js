const originalFizzBuzz = require("./fizzbuzz");
const fizzBuzzVersion2 = require("./fizzbuzz.v2/fizzbuzz.v2");

const checkReturnsEmptyArray = (func) => {
    let arr = func();
    expect(arr).toStrictEqual([]);
};

describe('FizzBuzz Tests', () => {
    describe('Empty Array Tests', () => {
        test.each([
            [originalFizzBuzz, 'Returns an empty array when given no values'],
            [fizzBuzzV2, 'Returns an empty array when given no values']
        ])('%s', (func, description) => {
            checkReturnsEmptyArray(func);
        });
    })

    describe('Output for Input 3', () => {
        test('Original version should return ["1", "2", "Fizz"] when given 3', () => {
            const arr = originalFizzBuzz(3);
            expect(arr).toStrictEqual(["1", "2", "Fizz"]);
        });
    
        test('Version 2 should return ["1", "2", "Fizz"] when given 3 for v2', () => {
            const arr = fizzBuzzVersion2(3);
            expect(arr).toStrictEqual(["1", "2", "Fizz"]);
        });
    });

    describe('Output for Input 15', () => {
        test('Should return the expected FizzBuzz sequence up to 15', () => {
            const arr = fizzBuzzVersion2(15);
            expect(arr).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
        });
    })

});
