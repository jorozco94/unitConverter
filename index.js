/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//add a click even to our button
//store the value of our input into a variable
// for each div we want to output a <p> with the conversion 

// lay out input element and button element
const inputEl = document.getElementById("measure");
const buttonEl = document.getElementById("converter");
// lay out element for each output
const lengthEl = document.getElementById("length");
const volEl = document.getElementById("vol");
const massEl = document.getElementById("mass");
const elArr = [lengthEl, volEl, massEl]
const lengthConv = 3.281
const volConv = .264
const massConv = 2.204

buttonEl.addEventListener("click", function() {
    //remove all child nodes here
    const number = Number(inputEl.value)
    // convert our measurement into meters & feet / liters & gallons etc.
    // push a string into the textContent of each p
    lengthEl.textContent = `${number} meters = ${(number * lengthConv).toFixed(3)} feet | ${number} feet = ${(number / lengthConv).toFixed(3)} meters`
    volEl.textContent = `${number} liters = ${(number * volConv).toFixed(3)} gallons | ${number} gallons = ${(number / volConv).toFixed(3)} liters`
    massEl.textContent = `${number} kilograms = ${(number * massConv).toFixed(3)} pounds | ${number} pounds = ${(number / massConv).toFixed(3)} kilograms`
})
