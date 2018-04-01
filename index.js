'use strict';

// 1. Char Swap
function charSwap(inputString) {
    if (inputString <= 1) { return; }

    let stringLength =  userString.length;

    let firstChar = inputString.charAt(0);
    let lastChar = inputString.charAt(stringLength - 1);


	let middleStr = inputString.substring(1, stringLength - 1);
	return firstChar + middleStr + lastChar;
}

// 2. Hi String
function hiString(inputString) {
    if (inputString <= 1) { return; }

    let defaultHi = "Hi ";
	let indexOfHi = inputString.search("Hi");
	if (indexOfHi == 0) {
		return inputString;
	} else {
		return defaultHi + inputString;
	}
}

// 3. Three Chars to Front
function threeCharsToFront(inputString) {
	let stringLength =  inputString.length;
	if (stringLength <= 3) {
		return "You need to enter a longer string";
    } 
    
	let endChar = inputString.charAt(stringLength - 1);
	let secondFromEndChar = inputString.charAt(stringLength - 2);
    let thirdFromEndChar = inputString.charAt(stringLength - 3);
    
	let remainingString = inputString.substring(0, stringLength - 3);
	return thirdFromEndChar + secondFromEndChar + endChar + remainingString;
}

// 4. Strings to Sentence
function stringToSentence() {
	let inputString = prompt("Enter your favorite color, animal, and candy (Comma Separated)");
	if (inputString == null){
		return "You canceled"
	}
	let userStrings = inputString.split(",");
	let sentence = `My favorite color is ${userStrings[0].trim()}, ${userStrings[1].trim()} are awesome, and I love ${userStrings[2].trim()}!`;
	return sentence;
}

// 5. Upper or Lower
function upperOrLower(inputString) {
	let stringLength =  inputString.length;
	if (stringLength <= 3) {
		return inputString.toUpperCase();
	}
	let firstChar = inputString.charAt(0);
	let secondChar = inputString.charAt(1);
    let thirdChar = inputString.charAt(2);
    
	let remainingString = inputString.substring(3, stringLength);
	return firstChar.toLowerCase() + secondChar.toLowerCase() + thirdChar.toLowerCase() + remainingString;
}

// 6. Integer Swap

function intSwap() {
    
}