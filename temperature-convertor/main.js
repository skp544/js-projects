/*
// ============ Formulas ========== \\

//  ==== From Pounds to (p) ==== \\

        kg = p / 2.2046
        g = p / 0.0022046
        o = p * 16


// ===== From Kilogram to (kg) ===== \\

        p = kg * 2.2046
        g = kg * 1000
        o = kg * 35.274


// ===== From Gram to (g) ===== \\

        p = g * 0.0022046
        kg = g / 1000
        o = g * 0.035274


// ===== From Ounce to (o) ===== \\

        kg = o / 35.274
        g = o / 0.035274
        p = o * 0.0625

*/

let celsius = document.querySelector(".celsius"),
  fah = document.querySelector(".fahrenheit"),
  kelvin = document.querySelector(".kelvin");

const form = document.querySelector("form");

form.addEventListener("input", convertTemperature);

function convertTemperature(e) {
  if (e.target.classList.contains("celsius")) {
    let x = e.target.value;
    fah.value = x * 1.8 + 32;
    kelvin.value = parseFloat(x) + 273.15;
  }
  if (e.target.classList.contains("fahrenheit")) {
    let x = e.target.value;
    celsius.value = (x - 32) / 1.8;
    kelvin.value = (x - 32) / 1.8 + 273.15;
  }
  if (e.target.classList.contains("kelvin")) {
    let x = e.target.value;
    celsius.value = parseFloat(x) - 273.15;
    fah.value = (x - 273.15) * 1.8 + 32;
  }
}
