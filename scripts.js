// lay out input element and button element
const inputEl = document.querySelector(".measure");
const buttonEl = document.querySelector(".converter");

// grabbing elements that contain output values that need to be updated once conversion happens
const beginningValues = document.querySelectorAll(".usr-val")
const firstOutputValues = document.querySelectorAll(".first-conv")
const secondOutputValues = document.querySelectorAll(".second-conv")

// functionality for our convertor button
buttonEl.addEventListener("click", function() {
    // convert the string the user inputs into a #
    const numberToConvert = Number(inputEl.value)

    // update output spans to contain the # we're converting from
    beginningValues.forEach((value) => {
        value.textContent = `${numberToConvert}`
    })

    // update output spans to contain the #'s we're converting to (imperial to metric)
    converter(numberToConvert, firstOutputValues, true);
    // update output spans to contain the #'s we're converting to (metric to imperial)
    converter(numberToConvert, secondOutputValues, false);
})

// conversion helper function - third parameter determines what conversion factor we use
function converter(numberToConvert, output, impToMetric) {
    // determining conversion factor based on if imp -> metric is true 
    const lengthConvFactor = impToMetric ? 3.281 : 1 / 3.281;
    const volConvFactor = impToMetric ? .264 : 1 / .264 ;
    const massConvFactor = impToMetric ? 2.204 : 1 / 2.204;

    // converting and updating text values conv factors have been set
    output.forEach((value) => {
        if (value.classList.contains("len-out")) {
            value.textContent = `${(numberToConvert * lengthConvFactor).toFixed(3)}`
        } else if (value.classList.contains("vol-out")) {
            value.textContent = `${(numberToConvert * volConvFactor).toFixed(3)}`
        } else {
            value.textContent = `${(numberToConvert * massConvFactor).toFixed(3)}`
        }
    })
}
