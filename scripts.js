// grab input, button, and alert element
const inputEl = document.querySelector(".measure");
const buttonEl = document.querySelector(".converter");
const alertEl = document.querySelector(".alert");

// grabbing elements that contain output values that need to be updated once conversion happens
const usrVal = document.querySelectorAll(".usr-val");
const firstConv = document.querySelectorAll(".first-conv");
const secondConv = document.querySelectorAll(".second-conv");

// functionality for our convertor button
buttonEl.addEventListener("click", function() {
    // convert the string the user inputs into a #
    const numberToConvert = Number(inputEl.value);
    
    // check if userInput is valid # - if so display alert & end fxn, if not, hide alert
    if (isNaN(numberToConvert)) {
        alertEl.hidden = false;
        return;
    } else {
        alertEl.hidden = true;
    }

    // update output spans to contain the # we're converting from
    usrVal.forEach((value) => {
        value.textContent = `${numberToConvert}`
    })

    // update output spans to contain the #'s we're converting to (imperial to metric)
    outputTextContentConverter(numberToConvert, firstConv, true);
    // update output spans to contain the #'s we're converting to (metric to imperial)
    outputTextContentConverter(numberToConvert, secondConv, false);
})

// conversion helper function - third parameter determines what conversion factor we use
function outputTextContentConverter(numberToConvert, output, isImpToMetric) {
    // determining conversion factor based on if imp -> metric is true 
    const lengthConvFactor = isImpToMetric ? 3.281 : 1 / 3.281;
    const volConvFactor = isImpToMetric ? .264 : 1 / .264 ;
    const massConvFactor = isImpToMetric ? 2.204 : 1 / 2.204;

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

function errorDisplay() {

}
