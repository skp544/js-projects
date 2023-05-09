// create variables
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

// functions

async function copyText(target) {
  if (target.value == "") {
    alert("Please generate a download link");
  } else {
    // target.select();
    // document.execCommand("copy");
    await navigator.clipboard.writeText(target.value);
    alert("Link has been copied to clipboard");
  }
}

function generateLink(e) {
  e.preventDefault();
  //   console.log(gLink.value);

  const gLinkValue = gLink.value;
  const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");

  //   console.log(confirmLink);

  if (confirmLink) {
    const getDownloadLink = gLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=share_link", "");

    // console.log(getDownloadLink);
    downloadLink.value = getDownloadLink;

    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });

    // Embed Audio Function

    const audio1 = `<audio width="300" height="32" controls = "controls" src="`;
    const audio2 = `" type="audio/mp3"></audio>`;

    const embedAudio = document.getElementById("embed-audio");

    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

    // console.log(embedAudio.value);

    // copy audio embed code

    const copyAudio = document.querySelector(".copy-audio");

    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    // embed video

    const getVideoLink = gLink.value.replace("/view?usp=share_link", "");

    const video1 = `<iframe src="`;
    const video2 = `/preview"width="560" height="315"></iframe>`;

    const embedVideo = document.getElementById("embed-video");

    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please enter a Google Drive File link");
  }

  //   console.log(gLinkValue);
}

// add event listners

btn.addEventListener("click", generateLink);
