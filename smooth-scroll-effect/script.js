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
}
