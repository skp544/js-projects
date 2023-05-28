const imgLarge = document.querySelector("#large-img");
const productImgs = document.querySelectorAll(".img-small img");

console.log(productImgs.length);
productImgs.forEach((image) => {
  image.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src");
    // console.log(src);

    imgLarge.src = src;
  });
});
