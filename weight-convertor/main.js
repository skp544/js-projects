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

let pounds = document.querySelector(".pounds"),
  kilograms = document.querySelector(".kilograms"),
  grams = document.querySelector(".grams"),
  ounces = document.querySelector(".ounces");

const form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }
  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = (x * 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }
  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    pounds.value = (x * 0.0022046).toFixed(2);
    kilograms.value = (x / 1000).toFixed(2);
    ounces.value = (x * 0.035274).toFixed(2);
  }
  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
    pounds.value = (x * 0.0625).toFixed(2);
  }
}
