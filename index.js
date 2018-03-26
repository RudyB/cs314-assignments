'use strict';

function promptUserConfirm() {
    let response = confirm()
    if (response) {
        console.log("User responded true");
    } else {
        console.log("User responded false");
    }
}

function promptUserConfirmTernary() {
    confirm() ?
        console.log("User responded true"):
        console.log("User responded false");
}

function promptUserNumber() {
    let input = prompt("Please enter a number","0");
    // Check for Cancel
    if (input == null) {
        alert("User Cancelled");
        return;
    } 
    // Check for blank input
    if (input == "") {
        alert("You cannot leave the input empty");
        return;
    }

    // Parse Input
    let number = parseInt(input);

    // Check for failed conversion
    if (!number) {
        alert("Could not convert input to Int");
        return
    } 
    
    alert("You inputted: " + number);
}

let myObj = {
    firstName: "Rudy",
    lastName: "Bermudez",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// function concat(string1, string2, string3 = "") {
//     return string1 + " " + string2 + " " + string3
// }

// let concat = function concat(string1, string2, string3 = "") {
//     return string1 + " " + string2 + " " + string3
//  };

let concat = (string1, string2, string3 = "") => string1 + " " + string2 + " " + string3


promptUserConfirm()
promptUserConfirmTernary()
promptUserNumber()

console.log(concat("My name", "is", "Rudy"))
console.log(concat("My name", "is"))

console.log("Full name: ", myObj.fullName())