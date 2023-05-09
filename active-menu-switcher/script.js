const navList = document.querySelector(".nav-list");
navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;

  if (navLink.classList.contains("link")) {
    // alert("Link");
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});
