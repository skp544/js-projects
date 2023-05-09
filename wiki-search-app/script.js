const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResults = document.querySelector(".results");
const errorMsg = document.querySelector(".alert");
const line = document.querySelector("hr");

const apiURL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = search.value;

  if (searchValue === "") {
    errorMessage("Search Cannot be empty, please enter a search term");
  } else {
    getResults(searchValue);
  }
});

function errorMessage(msg) {
  errorMsg.style.display = "block";
  line.style.display = "block";
  errorMsg.textContent = msg;
}

async function getResults(searchVal) {
  const response = await fetch(apiURL + searchVal);
  const results = await response.json();

  //   console.log(results);
  if (results?.query?.search.length == 0) {
    return errorMessage("Invalid Search, Please Enter a Valid Search Term");
  } else {
    displayResults(results);
  }
}

function displayResults(results) {
  line.style.display = "block";
  let output = "";

  results?.query?.search.forEach((result) => {
    let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;

    output += `
    
    <div class="result p-2">
    <a href="${resultURL}" target="_blank" class="h3 fw-bold">${result.title}</a>
    <br />
    <a href="${resultURL}" class="fs-5 text-success">${resultURL}</a>
    <p class="fs-5">
      ${result.snippet}
    </p>
  </div>
    `;

    searchResults.innerHTML = output;
  });
}
