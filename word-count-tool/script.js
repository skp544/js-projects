const input = document.querySelector(".input");
const character = document.querySelector(".character");
const word = document.querySelector(".word");
const readingTime = document.querySelector(".reading-time");
const wordLimit = document.querySelector(".word-limit");

const WORD_LIMIT = 225;

input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  let wordLeft = WORD_LIMIT;

  if (words) {
    word.innerHTML = words.length;
    wordLimit.innerHTML = wordLeft - words.length;
  } else {
    word.innerHTML = 0;
  }

  // word Limit Block of Code
  input.addEventListener("keydown", function (e) {
    words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
        e.preventDefault();
        console.log("Word Limit Reached");
      }
    }
  });

  // Reading Time based on 255 words/min
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + "m" + seconds + "s";
      console.log(minutes);
      console.log(seconds);
    } else {
      readingTime.innerHTML = seconds + "s";
    }
  } else {
    readingTime.innerHTML = "0s";
  }
}
