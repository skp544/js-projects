// Variables

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

const apiURL = "https://api.lyrics.ovh";

// Get input value

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = search.value.trim();

  console.log(searchValue);

  if (!searchValue) {
    alert("Nothing to Search");
  } else {
    beginSearch(searchValue);
  }
  //   console.log("Hello");
});

// Create Search Function

async function beginSearch(searchValue) {
  const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);

  const data = await searchResult.json();

  //   console.log(data);

  displayData(data);
}

function displayData(data) {
  result.innerHTML = `
    <ul class = "song">
        ${data.data
          .map(
            (song) => `
            
            <li>
                <div>
                    <strong>${song.artist.name}</strong> - ${song.title}
                </div>
                <span data-artist= "${song.artist.name}" data-songtitle="${song.title}">
                Get Lyrics </span>
            </li>`
          )
          .join("")}
    </ul>

    `;
}

// Get Lyrics Function

result.addEventListener("click", (e) => {
  const clickedEl = e.target;

  //check get lyrics button

  if (clickedEl.tagName === "SPAN") {
    const artist = clickedEl.getAttribute("data-artist");
    const songTitle = clickedEl.getAttribute("data-songtitle");

    getLyrics(artist, songTitle);
  }
});

async function getLyrics(artist, songTitle) {
  const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);

  const data = await response.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  result.innerHTML = `
  
  <h2>
    <strong>${artist}</strong> - ${songTitle}
  </h2>
  <p> ${lyrics} </p>
  `;
}
