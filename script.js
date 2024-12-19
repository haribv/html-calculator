// script.js

let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;  // The button value adding to the display
}

function clearDisplay() {
    display.value = '';  // delete the display content
}

function calculateResult() {
    try {
        display.value = eval(display.value);  
    } catch (e) {
        display.value = 'Hiba';  // error code
    }
}
