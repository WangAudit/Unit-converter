const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputEl.value = 1

convertBtn.addEventListener("click", countLength)
convertBtn.addEventListener("click", countVolume)
convertBtn.addEventListener("click", countMass)

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        countLength()
        countMass()
        countVolume()
    }
})

function countLength() {
    meterToFeet = inputEl.value * 3.281
    feetToMeter = inputEl.value * 0.305
    if (inputEl.value > 0) {
        lengthEl.textContent = `${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters`
    } else {
        lengthEl.textContent = `0 meters = 0 feet | 0 feet = 0 meters`
    }
    
}

function countVolume() {
    litToGal = inputEl.value * 0.264
    galToLit = inputEl.value * 3.788
    if (inputEl.value > 0) {
        volumeEl.textContent = `${inputEl.value} liters = ${litToGal.toFixed(3)} gallons | ${inputEl.value} gallons = ${galToLit.toFixed(3)} liters`
    } else {
        volumeEl.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`
    }
    
}

function countMass() {
    kgToPound = inputEl.value * 2.204
    poundToKg = inputEl.value * 0.454
    if (inputEl.value > 0) {
        massEl.textContent = `${inputEl.value} kilograms = ${kgToPound.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundToKg.toFixed(3)} kilograms`
    } else {
        massEl.textContent = `0 kilograms = 0 pounds | 0 pounds = 0 kilograms`
    }
    
}