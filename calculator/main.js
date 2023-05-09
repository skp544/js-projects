const keys = document.querySelectorAll("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

for (let i = 0; i < keys.length; i++) {
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else {
    keys[i].addEventListener("click", addToCurrentValue(i));
  }
}

function addToCurrentValue(i) {
  return () => {
    result.innerHTML += keys[i].innerHTML;
  };
}

function calculate() {
  return (result.innerHTML = eval(result.innerHTML));
}

clear.addEventListener("click", () => {
  result.innerHTML = "";
});
