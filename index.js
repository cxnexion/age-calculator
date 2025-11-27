import flatpickr from "flatpickr";
import {DateTime} from "luxon";

const userInput = document.getElementById("dateInput");
const outputDisplay = document.getElementById("result");
const errorDisplay = document.getElementById("errorDisplay");
const ageForm = document.getElementById("ageForm");


userInput.flatpickr({
    dateFormat: "Y-m-d",
});

ageForm.addEventListener("submit", event => {

    event.preventDefault();

    const birthDate = DateTime.local(...userInput.value.split("-").map(element => Number(element)))
    const dateDiff = birthDate.diffNow( ["months", "years"]);

    const yearsOld = Math.floor(-dateDiff.years);
    const monthsOld =Math.floor(-dateDiff.months);

    if(yearsOld) {
        outputDisplay.textContent = `${yearsOld} years ` + `${monthsOld} months`;
        errorDisplay.textContent ="";
    }
    else{
        errorDisplay.textContent ="Enter your REAL birth date";
    }

})