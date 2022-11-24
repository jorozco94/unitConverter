// lay out input element and button element
const inputEl = document.querySelector(".measure");
const buttonEl = document.querySelector(".converter");
// lay out element for each output
const lengthEl = document.querySelector(".length");
const volEl = document.querySelector(".vol");
const massEl = document.querySelector(".mass");
const elArr = [lengthEl, volEl, massEl];

// grabbing elements that contain output values that need to be updated once conversion happens
const beginningValues = document.querySelectorAll(".usr-val")
const firstOutputValues = document.querySelectorAll(".first-conv")
const secondOutputValues = document.querySelectorAll(".second-conv")

// conversion factors for each measure type
const lengthConvFactor = 3.281;
const volConvFactor = .264;
const massConvFactor = 2.204;

// functionality for our convertor button
buttonEl.addEventListener("click", function() {
    // convert the string the user inputs into a #
    const numberToConvert = Number(inputEl.value)

    // update output spans to contain the # we're converting from
    beginningValues.forEach((value) => {
        value.textContent = `${numberToConvert}`
    })

    // update output spans to contain the #'s we're converting to (imperial to metric)
    firstOutputValues.forEach((value) => {
        if (value.classList.contains("len-out")) {
            value.textContent = `${(numberToConvert * lengthConvFactor).toFixed(3)}`
        } else if (value.classList.contains("vol-out")) {
            value.textContent = `${(numberToConvert * volConvFactor).toFixed(3)}`
        } else {
            value.textContent = `${(numberToConvert * massConvFactor).toFixed(3)}`
        }
    })

    // update output spans to contain the #'s we're converting to (metric to imperial)
    secondOutputValues.forEach((value) => {
        if (value.classList.contains("len-out")) {
            value.textContent = `${(numberToConvert / lengthConvFactor).toFixed(3)}`
        } else if (value.classList.contains("vol-out")) {
            value.textContent = `${(numberToConvert / volConvFactor).toFixed(3)}`
        } else {
            value.textContent = `${(numberToConvert / massConvFactor).toFixed(3)}`
        }
    })
})
