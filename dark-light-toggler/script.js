const toggleDarkMode = document.querySelector(".toggle-darkmode");

const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// constSet Dark Mode

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};

// disabled darkmode

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};

// save Darkmode

if (darkMode === "enabled") {
  enableDarkMode();
}

// event listeners

toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
