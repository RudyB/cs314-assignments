"use strict"

function scrollTo1() {
    document.getElementById("one").scrollIntoView();
}

function scrollTo2() {
    document.getElementById("two").scrollIntoView();
}

function scrollTo3() {
    document.getElementById("three").scrollIntoView();
}

function scrollTo4() {
    document.getElementById("four").scrollIntoView();
}

function scrollTo5() {
    document.getElementById("five").scrollIntoView();
}

function setBackgroundBlue() {
    document.getElementById("one").style.backgroundColor = "blue";
}

function setBackgroundGreen() {
    document.getElementById("one").style.backgroundColor = "green";
}

function toggleBackgroundPinkOrange() {
    let buttonText = document.getElementById("backgroundToggleButton").innerHTML;
    if (buttonText==="Click for pink!") {
        document.getElementById("two").style.backgroundColor = "pink";
        document.getElementById("backgroundToggleButton").innerHTML = "Click for orange!"
    } else {
        document.getElementById("two").style.backgroundColor = "orange";
        document.getElementById("backgroundToggleButton").innerHTML = "Click for pink!"
    }
}

function checkForReturnKey() {
    var input = document.getElementById("userInputField")

    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.getElementById("appendItemButton").click();
        }
    })
}

function appendToList() {
    let userInput = document.getElementById("userInputField").value;
    if (userInput === "") { return } // Check for empty input
    let listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(userInput));
    document.getElementById("list").appendChild(listElement);
    document.getElementById("userInputField").value = "";
}

function removeListElement(element) {
    element.parentNode.removeChild(element)
}

function highlight(element) {
    document.getElementById("item1").style.backgroundColor = "lightgray";
    document.getElementById("item2").style.backgroundColor = "lightgray";
    document.getElementById("item3").style.backgroundColor = "lightgray";
    document.getElementById("item4").style.backgroundColor = "lightgray";
    element.style.backgroundColor = "orange";
}

checkForReturnKey()