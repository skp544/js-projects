const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // this.classList.toggle("active");

    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordion active");

    //console.log(desc);
    console.log(desc.scrollHeight);

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.toggle("active");
    } else {
      for (let j = 0; j < activeAcc.length; j++) {
        activeAcc[j].classList.remove("active");
      }

      for (let k = 0; k < allDesc.length; k++) {
        allDesc[k].style.maxHeight = null;
      }

      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
