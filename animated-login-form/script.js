const login = document.querySelector(".login-link");
const forgot = document.querySelector(".forgot-link");
const register = document.querySelector(".register-link");
const registerSection = document.querySelector(".register");
const loginSection = document.querySelector(".login");
const forgotSection = document.querySelector(".forgot");
const close = document.querySelector(".close");

register.addEventListener("click", (e) => {
  e.preventDefault();
  //   loginSection.style.display = "none";
  switchSection(loginSection, "none");
  //   registerSection.style.display = "block";
  switchSection(registerSection, "flex");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  //   loginSection.style.display = "flex";
  switchSection(loginSection, "flex");
  switchSection(registerSection, "none");
  //   registerSection.style.display = "none";
});

forgot.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(loginSection, "none");
  switchSection(forgotSection, "flex");
  //   loginSection.style.display = "none";
  //   forgotSection.style.display = "flex";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(loginSection, "flex");
  switchSection(forgotSection, "none");
  //   loginSection.style.display = "flex";
  //   forgotSection.style.display = "none";
});

function switchSection(section, property) {
  section.style.display = property;
}
