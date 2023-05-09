const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  //   console.log(e);
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });

  closeMenu();
}

// responsive mobile menu

const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

function showMenu() {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
}

function closeMenu() {
  hamburger.style.display = "block";
  close.style.transform = "translateY(-20rem)";
  menu.style.transform = "translateY(-200%)";
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
