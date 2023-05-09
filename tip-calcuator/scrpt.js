const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

const bill = document.querySelector(".bill").value;
const rate = document.querySelector(".rate").value;

const calculateTip = () => {
  //   e.preventDefault();
  if (bill === "" || rate == "") {
    // console.log("Hi");
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = `Please enter a number`;
    error.style.display = "block";
    hideError();
  } else {
    let tipAmount = bill * rate;

    tipAmount = Math.ceil(tipAmount);

    tip.innerHTML = `Tip Amount: $ ${tipAmount}`;

    let totalBill = tipAmount + Number(bill);
    total.innerHTML = `Total Amount: $ ${totalBill}`;
  }
};

btn.addEventListener("click", calculateTip);
