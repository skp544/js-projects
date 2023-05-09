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
const menuWrapper = document.querySelector(".nav-wrapper");

function showMenu() {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
}

function closeMenu() {
  hamburger.style.display = "block";
  close.style.transform = "translateY(-20rem)";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
  subMenuThree.style.transform = "translateX(-100%)";
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
menuWrapper.addEventListener("click", closeMenu);

// Submenu

const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
  subMenuThree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  subMenuThree.style.transform = "translateX(-100%)";
});
