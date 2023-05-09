// BMI - kg /  m2

// Norma l - 18.5  - 24.9
// Underweight < 18.5
// Over weigtht - 25 - 29.9
// Obese - 30 and above

// Variables

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  let bmi = 0;
  //   console.log(height, weight);

  // Validation Input

  if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Provide a valid Height!");
  } else if (weight === "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid Weight!");
  } else {
    height = height / 100;

    bmi = (weight / Math.pow(height, 2)).toFixed(2);
    // console.log(bmi);/
  }

  //   Categorise result

  if (bmi < 18.5) {
    showResult(`Underweight: <span>${bmi}</span>`, "orange");
  } else if (bmi >= 18.5 && bmi < 25) {
    showResult(`Normal: <span>${bmi}</span>`, "green");
  } else if (bmi >= 25 && bmi < 30) {
    showResult(`Overweight: <span>${bmi}</span>`, "blue");
  } else {
    showResult(`Obese: <span>${bmi}</span>`, "red");
  }
  resetBtn.style.display = "block";
}

function showResult(value, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = value);
}

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("form").reset();
  result.style.backgroundColor = "transparent";
  result.innerHTML = "";
  resetBtn.style.display = "none";
});
