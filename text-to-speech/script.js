const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const speechBtn = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechSynthesis = window.speechSynthesis;

//   Check browser support

if (speechSynthesis) {
  console.log("Specch Synthesis supported");

  micBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = input.value;

    const speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = inputValue;
    speech.volume = "1";
    speech.rate = "1";

    speech.pitch = "1";
    speech.voice = speechSynthesis.speak(speech);
  }

  //   recognition.onstart = function () {
  //   };
} else {
  console.log("Speech Syntheses not supported");
  speechBtn.style.visibility = "hidden";
}
