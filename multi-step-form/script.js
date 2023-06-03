const formItems = document.getElementsByClassName("form-item");
const btns = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");

let currentFormItem = 0;

formItems[currentFormItem].style.display = "block";

if (currentFormItem == 0) {
  btns[0].style.display = "none";
  steps[0].style.background = "#1e9df7";
}

// Next buttons

btns[1].addEventListener("click", () => {
  currentFormItem++;
  const previosFormItem = currentFormItem - 1;

  if (currentFormItem > 0 && currentFormItem < 4) {
    btns[0].style.display = "inline-block";
    formItems[currentFormItem].style.display = "block";
    formItems[previosFormItem].style.display = "none";
    steps[currentFormItem].style.background = "#1e9df7";

    if (currentFormItem == 3) {
      btns[1].textContent = "Submit";
    }
  } else {
    if (currentFormItem > 3) {
      // validate Form
      alert("Form Submitted Successfully");
    }
  }
});

// previos buttons

btns[0].addEventListener("click", () => {
  if (currentFormItem > 0) {
    currentFormItem--;
    const nextFormItem = currentFormItem + 1;

    formItems[currentFormItem].style.display = "block";
    formItems[nextFormItem].style.display = "none";

    steps[nextFormItem].style.background = "#cfd2d4";

    if (currentFormItem == 0) {
      btns[0].style.display = "none";
    }

    if (currentFormItem < 3) {
      btns[1].textContent = "Next";
    }
  }
});
