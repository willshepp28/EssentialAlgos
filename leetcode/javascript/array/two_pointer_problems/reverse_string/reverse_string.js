
const reverseString = function(inputString) {
    // Create pointers
    let startIndex = 0;
    let endIndex = inputString.length - 1;

    // Iterate through the string
    while (startIndex < endIndex) {
        // Swap characters at indexes
        let temporaryChar = inputString[startIndex];
        inputString[startIndex] = inputString[endIndex];
        inputString[endIndex] = temporaryChar;

        startIndex++;
        endIndex--;
    }

    console.log(inputString)
};

module.exports = reverseString;