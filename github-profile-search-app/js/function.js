import * as v from "./variable.js";
import { errorMSG } from "./variable.js";

// GET USERS

export async function getUser(user) {
  const response = await fetch(`${v.apiURL}${user}`);
  const data = await response.json();
  if (!response.ok) {
    errorMessage("User Not Found, Try Another");
  } else {
    displayData(data);
    getRepos(user);
  }
}

export function errorMessage(msg) {
  v.profile.innerHTML = "";
  document.querySelector(".hide").style.display = "none";
  v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}

function displayData(data) {
  const html = `
            <img src=${data.avatar_url}
                alt=${data.name}
                class="img-thumbnail rounded-circle"
              />
              <h2>${data.name}</h2>
              <p>${data.login}</p>
              <div class="d-grid">
                <a href=${data.html_url} target="_blank" class="btn btn-outline-secondary">View Profile</a>
              </div>
              <p class="pt-2">
                <span>${data.followers} Followers</span>
                <span>${data.following} Following</span>
              </p>
              <p class="">${data.public_repos} Repos</p>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                ${data.location}
              </p>
    `;

  v.profile.innerHTML = html;
}

async function getRepos(username) {
  const response = await fetch(`${v.apiURL}${username}/repos`);
  const data = await response.json();

  if (data.length == 0) {
    v.errorMSG.innerHTML = "No Repos ";
    v.repo.innerHTML = "";
    v.repo.style.border = "0 ";
  } else {
    displayRepos(data);
  }

  //   displayRepos(data);
  //   console.log(data);
}

// function displayRepos(data) {
//   //   let repoData = data.map((repo) => {
//   //     return `
//   //     <span class="repo rounded-2 p-3" key=${index}>
//   //         <a href=${data.html_url} target="_blank">${data.name}</a>
//   //         <p>
//   //         <strong>Stars: ${data.stargazers_count} |</strong>
//   //         <strong>Watchers: ${data.watchers_count} |</strong>
//   //         <strong>Forks: ${data.forks_count} |</strong>
//   //         </p>
//   //   </span>

//   //         `;
//   //   });

//   let repoData = "";

//   for (let i = 0; i < data.length; i++) {
//     repoData = `
//     <span class="repo rounded-2 p-3" >
//           <a href=${data[i].html_url} target="_blank">${data[i].name}</a>
//        <p>
//              <strong>Stars: ${data[i].stargazers_count} |</strong>
//              <strong>Watchers: ${data[i].watchers_count} |</strong>
//              <strong>Forks: ${data[i].forks_count} |</strong>
//              </p>
//         </span>
//          `;
//   }
//   //   console.log(data);
//   //   console.log(data[0].html_url);

//   //   console.log(repoData);

//   v.repos.innerHTML = repoData;
// }

function displayRepos(repoData) {
  let repo_data = repoData.map((repo) => {
    return `
          <span class="repo border border-rounded p-3">
              <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
              <p>
              <strong>Stars: ${repo.starazers_count} |</strong>
              <strong>Watchers: ${repo.watchers_count} |</strong>
              <strong>Forks: ${repo.forks_count}</strong>
              </p>
        </span>
          `;
  });
  //   v.repos.innerHTML = repo_data;
  v.repos.innerHTML = repo_data.slice(0, 8).join("");
  document.querySelector(".hide").style.display = "block";
}
