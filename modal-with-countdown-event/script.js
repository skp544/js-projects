const modal = document.querySelector("#modal");
const input = document.querySelector("#link");
const btn = document.querySelector("#btn");
const close = document.querySelector(".close");

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

function openPopup(e) {
  e.preventDefault();
  modal.style.display = "block";
  startCountdown();
}

function closePopup(e) {
  modal.style.display = "none";
}

// window.onclick = function (e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };

// counter function

let reverseCounter = 10;
let progressBar = document.querySelector("#pbar");
let counting = document.querySelector("#counting");

function startCountdown() {
  let downloadTimer = setInterval(() => {
    progressBar.value = 10 - --reverseCounter;
    if (reverseCounter <= -1) {
      clearInterval(downloadTimer);
      closePopup();
      window.open(input.value, "_blank");
    }
    counting.innerHTML = reverseCounter;
  }, 1000);

  let reverseCounter = 11;
}
