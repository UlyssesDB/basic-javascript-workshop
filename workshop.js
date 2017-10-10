function firstLetter(inputString) {
    if (inputString === undefined) { return undefined; }
    else { return inputString[0]; }
}

function lastLetter(inputString) {
    if (inputString === undefined) { return undefined; }
    else { return inputString[inputString.length - 1]; }
}

function letterAtPosition(inputString, position) {
    if (inputString === undefined) { return undefined; }
    else { return inputString[position]; }
}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { return undefined; }
    else { return num1 + num2; }
}

function multiplyTwoNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { return undefined; }
    else { return num1 * num2; }
}

function calculator(operation, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { return undefined; }
    if (operation === "add") { return num1 + num2; }
    if (operation === "sub") { return num1 - num2; }
    if (operation === "mult") { return num1 * num2; }
    if (operation === "div") { return num1 / num2; }
}

function repeatString(inputString, numRepetitions) {
    if (numRepetitions <= 0) { return ""; }
    if (inputString === "") { return ""; }
    else {
        return inputString.repeat(numRepetitions);
    }
}

function reverseString(inputString) {
    var arr = inputString.split("");
    var arr2 = []
    for (var i = 0; i = arr.length; i++) {
        arr2.push(arr.pop());
    }
    return arr2.join("");
}

function longestWord(inputString) {
    if (inputString === "") { return ""; }
    var arr = inputString.split(" ");
    var longest = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) { longest = arr[i]; }
    }
    return longest;
}

function capitalize(inputString) {
    var arr = inputString.split(" ");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase());
    }
    return arr2.join(" ");
}

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
    if (!Array.isArray(arrayOfNumbers)) { return undefined; }
    else {
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            if (isNaN(arrayOfNumbers[i])) { return undefined; }
            else { sum += arrayOfNumbers[i]; }
        }
    }
    return sum;
}

function uniqueElements(array1, array2) {
    var ret = [];
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return undefined;
    }
    // add all the elements of array1 that are not in array2
    for (var i = 0; i < array1.length; i++) {
        var potential = array1[i];
        if (!(isInArray(potential, array2))) {
            ret.push(potential);
        }
    }
    // add all the elements of array2 that are not in array1
    for (var i = 0; i < array2.length; i++) {
        var potential = array2[i];
        if (!(isInArray(potential, array1))) {
            ret.push(potential);
        }
    }
    return ret;
}

function isPalindrome(inputString) {
    var str1 = inputString.replace(/[^a-zA-Z]/ig, "").toLowerCase();
    var str2 = inputString.split("").reverse().join("").replace(/[^a-zA-Z]/ig, "").toLowerCase();
    if (str1 === str2) { return true; }
    else { return false; }
}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};


