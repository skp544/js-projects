const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let movieDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let search = document.querySelector(".search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  //console.log(data?.results);

  displayMovies(data?.results);
}

function displayMovies(data) {
  movieDiv.innerHTML = ``;

  data.forEach((movie) => {
    const div = document.createElement("div");

    div.classList.add("movie");

    div.innerHTML = `
    <img src=${IMG_PATH + movie.poster_path} alt="movie-image" />
            <div class="details">
              <h2 class="title">${movie.title}</h2>
              <p class="rate">Rating: <span class="rating">${
                movie.vote_average
              }</span></p>
              <p class="overview">
              ${movie.overview}
              </p>
            </div>
        `;

    movieDiv.appendChild(div);
  });
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  movieDiv.innerHTML = "";
  const inputVal = search.value;

  if (inputVal) {
    getMovies(SEARCH_API + inputVal);
    search.value = "";
  }
});
