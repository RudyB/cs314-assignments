'use strict';

// Helper Functions

function promptUser(message, defaultValue) {
	let input = prompt(message,defaultValue);

    // Check for Cancel
    if (input == null) {
        alert("User Cancelled");
        return "";
    } 
    // Check for blank input
    if (input == "") {
        alert("You cannot leave the input empty");
        return "";
	}
	return input;
}

// 1. Char Swap
function charSwap(inputString) {
    if (inputString <= 1) { return; }

    let stringLength =  inputString.length;

    let firstChar = inputString.charAt(0);
    let lastChar = inputString.charAt(stringLength - 1);


	let middleStr = inputString.substring(1, stringLength - 1);
	return firstChar + middleStr + lastChar;
}

// 2. Hi String
function hiString() {
	let inputString = promptUser("Please enter your name", "Bob")
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
	let inputString = promptUser("Enter your favorite color, animal, and candy (Comma Separated)","blue, dogs, chocolate");
	if (inputString == null){
		return "You canceled"
	}
	let userStrings = inputString.split(",");
	let sentence = `My favorite color is ${userStrings[0].trim()}, ${userStrings[1].trim()} are awesome, and I love ${userStrings[2].trim()}!`;
	return sentence;
}

// 5. Upper or Lower
function upperOrLower() {
	let inputString = promptUser("Please enter your name", "Bob")
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
	let inputString = promptUser("Enter a list of numbers (Comma Separated)","1,6,4,2");
	let inputArray = inputString.split(",");
	let arrayLength = inputArray.length;
	
	// Check for at least 2 elements
	if (arrayLength <= 1) {
		return "Enter at least 2 numbers"
	}
	for (let i = 0; i < arrayLength; i++){	
		if (isNaN(inputArray[i])) {
			return "Invalid Input";
		}
	}
	let firstElement = inputArray[0];
	inputArray[0] = inputArray[arrayLength-1];
	inputArray[arrayLength-1] = firstElement;
	
	return inputArray;
}

// 7. Longest String

function longestString() {
	let inputString = promptUser("Enter at least 2 strings (comma separated)","hello, world");
	let inputArray = inputString.split(",");
	let arrayLength = inputArray.length;

	// Check for at least 2 elements
	if (arrayLength <= 1) {
		return "Enter at least 2 numbers"
	}

	let longestStringLength = 0;
	let longestString = "";
		for (let i = 0; i < arrayLength; i++)
		{
			let stringLength = inputArray[i].length;
			if (longestStringLength <= stringLength) {
				longestStringLength = stringLength;
				longestString = inputArray[i];
			}
		}
		alert(longestString);
}

// 8. Largest Even Number
function largestEvenNumber() {
	let inputString = promptUser("Enter at least 2 numbers (comma separated)","1, 2");
	
	let inputArray = inputString.split(",");
	let arrayLength = inputArray.length;
	
	// Check for at least 2 elements
	if (arrayLength <= 1) {
		return "Enter at least 2 numbers"
	}
	for (let i = 0; i < arrayLength; i++) {	
		// Validate input
		if (isNaN(inputArray[i])) {
			return "Only enter numbers";
		}
	}
	
	let numberArray = inputArray.sort((a, b) => b - a);
	
	for (let i = 0; i < arrayLength; i++) {
		if (inputArray[i]%2 == 0) {
				return numberArray[i];
		}
	}
	return "No Even Numbers Exist in List";
}


// 9. Current Day and Time
function currentDayTime() {
	let date = new Date();
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	let fullTime = `Today is ${days[date.getDay()]}.\nIt is ${date.getHours()}:${date.getMinutes()}.`;
	alert(fullTime);
}


// 10. Unlimited Function
function UnlimitedFunction() {
	let inputString = promptUser("Enter at as many comma separated items as you would like","1, 2");
	let inputArray = inputString.split(",");
	let inputArrayString = inputArray.toString();
	return inputArrayString.replace(/,/g, " ")
}
