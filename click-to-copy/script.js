const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();
  //   console.log(e);

  coupon.select();
  coupon.setSelectionRange(0, -1);
  document.execCommand("copy");

  btn.textContent = "Copied!!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
  //   alert(coupon);
};

btn.addEventListener("click", copyText);
