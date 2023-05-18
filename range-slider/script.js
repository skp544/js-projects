const rangeSlider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = rangeSlider.value;

rangeSlider.oninput = function () {
  value.textContent = this.value;
};
