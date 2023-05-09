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

// sticky header

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll indicator
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = `${scrollPercentage}%`;

  // =====news letter form==

  const newsletter = document.querySelector(".newsletter");

  if (scrollPercentage > 80) {
    newsletter.style.transform = "translateX(0)";
  } else {
    newsletter.style.transform = "translateX(-100%)";
  }

  document.querySelector(".close-btn").addEventListener("click", () => {
    newsletter.style.transform = "translateX(-100%)";
  });
}
// AOS
AOS.init({
  duration: 1000,
});
