const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtn = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//   Check browser support

if (speechRecognition) {
  console.log("Specch Recognition supported");

  const recognition = new speechRecognition();

  micBtn.addEventListener("click", micBtnClicked);

  function micBtnClicked(e) {
    console.log("Buttin Clicked");

    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  //   Start Speech
  recognition.addEventListener("start", () => {
    console.log("start");

    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");

    instruction.textContent = "Recording... Press Ctrl + M to stop";

    searchInput.focus();

    console.log("Speech Recoginition Enabled");
  });

  //   Stop speech recognition

  recognition.addEventListener("end", () => {
    console.log("end");
    micBtn.classList.add("fa-microphone");
    micBtn.classList.remove("fa-microphone-slash");

    instruction.textContent = "Press Ctrl + X or Click the Mic icon to start";
    searchInput.focus();

    console.log("Speech Recoginition Disbaled");
  });

  //   GEt recogmition result
  recognition.continuous = true;
  // let content = "";
  recognition.addEventListener("result", (e) => {
    console.log("Result");
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    console.log(current);
    console.log(transcript);

    if (transcript.toLowerCase().trim() === "stop recording") {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === "search") {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === "reset form") {
        searchInput.value = "";
      } else {
        searchInput.value = transcript;
      }
    }

    // content += transcript;

    // searchInput.value = content;
    // searchInput.focus();
  });

  // add key board event listener

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "x") {
      // e.shiftkey
      recognition.start();
    }

    if (e.ctrlKey && e.key == "m") {
      recognition.stop();
    }
  });

  //   recognition.onstart = function () {
  //   };
} else {
  console.log("Speech Recognition not supported");
  speechBtn.style.visibility = "hidden";
}
