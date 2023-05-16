const main = document.querySelector(".main");
const alertBox = document.querySelector(".alert");
const exclamationIcon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-times");

// Show Alert class

class ShowAlert {
  constructor(state, borderColor, color) {
    this.state = state;
    this.borderColor = borderColor;
    this.color = color;
  }

  trigger(message) {
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    alertBox.classList.add("show");
    alertBox.classList.remove("hide");

    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    }, 5000);

    start();

    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    });
  }
}

const warning = new ShowAlert("#ffdb98", "#ffa502", "#ce8500");

const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    danger.trigger("Danger: This is a Danger Alert!");
  } else if (e.target.classList.contains("btn-warning")) {
    warning.trigger("Warning: This is a Danger Alert!");
  }
});

// progress bar
function start() {
  const progress = document.querySelector(".progress");

  let width = 0;

  const timeInterval = setInterval(fill, 50);
  function fill() {
    if (width >= 100) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = `${width}%`;
    }
  }
}
