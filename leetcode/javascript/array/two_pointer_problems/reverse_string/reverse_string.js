


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