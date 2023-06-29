const play = document.querySelector(".play");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

const trackImage = document.querySelector(".track-image");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");

const slider = document.querySelector(".duration-slider");
const trackCurrentTime = document.querySelector(".current-time");
const trackDuration = document.querySelector(".duration-time");

const currentVolume = document.querySelector("#volume");
const showVolume = document.querySelector("#show-volume");
const volumeIcon = document.querySelector("#volume-icon");

const autoPlayBtn = document.querySelector(".play-all");

const hamburger = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");

const musicPlaylist = document.querySelector(".music-playlist");
const playlistDiv = document.querySelector(".playlist-div");
const playlist = document.querySelector(".playlist");

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement("audio");

// event listeners

play.addEventListener("click", justPlay);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
hamburger.addEventListener("click", showPlaylist);
closeIcon.addEventListener("click", hidePlaylist);

// load tracks

function loadTrack(indexTrack) {
  clearInterval(timer);

  resetSlider();

  track.src = trackList[indexTrack].path;
  title.innerHTML = trackList[indexTrack].name;
  trackImage.src = trackList[indexTrack].img;
  artist.innerHTML = trackList[indexTrack].singer;
  track.load();
  timer = setInterval(updateSlider, 1000);
}

loadTrack(indexTrack);

// play song or pause song

function justPlay() {
  if (songIsPlaying === false) {
    playSong();
  } else {
    pauseSong();
  }
}

// play song

function playSong() {
  track.play();
  songIsPlaying = true;
  play.innerHTML = `<i class="fas fa-pause"></i>`;
}

// pause song

function pauseSong() {
  track.pause();
  songIsPlaying = false;
  play.innerHTML = `<i class="fas fa-play"></i>`;
}

// Next Song

function nextSong() {
  if (indexTrack < trackList.length - 1) {
    indexTrack++;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = 0;
    loadTrack(indexTrack);
    playSong();
  }
}

// Prev song

function prevSong() {
  if (indexTrack > 0) {
    indexTrack--;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = trackList.length - 1;
    loadTrack(indexTrack);
    playSong();
  }
}

// auto play
function autoPlayToggle() {
  if (autoplay == 0) {
    autoplay = 1;
    autoPlayBtn.style.background = "#db6400";
  } else {
    autoplay = 0;
    autoPlayBtn.style.background = "#ccc";
  }
}

// mute sound

function muteSound() {
  track.volume = 0;
  showVolume.innerHTML = 0;
  currentVolume.value = 0;
}

// change volume

function changeVolume() {
  showVolume.innerHTML = currentVolume.value;
  track.volume = currentVolume.value / 100;
}

// change  duration

function changeDuration() {
  let sliderPosition = track.duration * (slider.value / 100);

  track.currentTime = sliderPosition;
}

// update slider

function updateSlider() {
  let position = 0;
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = `<i class="fas fa-play"></i>`;

    if (autoplay == 1 && indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else if (autoplay == 1 && indexTrack == trackList.length - 1) {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
}

// reset slider

function resetSlider() {
  slider.value = 0;
}

// update current song tiem

function songTimeUpdate() {
  if (track.duration) {
    let curMins = Math.floor(track.currentTime / 60);
    let curSecs = Math.floor(track.currentTime - curMins * 60);
    let durationMins = Math.floor(track.duration / 60);
    let durationSecs = Math.floor(track.duration - durationMins * 60);

    if (durationSecs < 10) {
      durationSecs = "0" + durationSecs;
    }
    if (durationMins < 10) {
      durationMins = "0" + durationMins;
    }
    if (curMins < 10) {
      curMins = "0" + curMins;
    }
    if (curSecs < 10) {
      curSecs = "0" + curSecs;
    }

    trackCurrentTime.innerHTML = curMins + ":" + curSecs;
    trackDuration.innerHTML = durationMins + ":" + durationSecs;
  } else {
    trackCurrentTime.innerHTML = "00:00";
    trackDuration.innerHTML = "00:00";
  }
}

// show playlist

function showPlaylist() {
  musicPlaylist.style.transform = " translateX(0)";
}

// hide playlist
function hidePlaylist() {
  musicPlaylist.style.transform = " translateX(-100%)";
}

// display tracks in playlist

let counter = 1;

function displayTracks() {
  for (let i = 0; i < trackList.length; i++) {
    // console.log(trackList[i].name);
    let div = document.createElement("div");
    div.classList.add("playlist");
    div.innerHTML = `
      <span class="song-index">${counter++}</span>
      <p class="single-song">${trackList[i].name}</p>
    `;

    playlistDiv.appendChild(div);
  }
  playFromPlaylist();
}

displayTracks();

// play song from playlist

function playFromPlaylist() {
  playlistDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("single-song")) {
      // alert(e.target.innerHTML);/

      const indexNum = trackList.findIndex((item, index) => {
        if (item.name == e.target.innerHTML) {
          return true;
        }
      });
      loadTrack(indexNum);
      playSong();
      hidePlaylist();
    }
  });
}
