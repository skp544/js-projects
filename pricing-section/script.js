const checkbox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const basic = document.querySelector(".basic");
const prof = document.querySelector(".prof");
const master = document.querySelector(".master");

slider.addEventListener("click", () => {
  if (!checkbox.checked) {
    [basic.textContent, prof.textContent, master.textContent] = [
      "120",
      "240",
      "360",
    ];
  } else {
    [basic.textContent, prof.textContent, master.textContent] = [
      "9.99",
      "19.99",
      "29.99",
    ];
  }
});
