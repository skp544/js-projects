const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbols");
const submitBtn = document.getElementById("submit");
const password = document.getElementById("password");

function generatePassword(length, initialPassword) {
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }

  return pass;
}

submitBtn.addEventListener("click", () => {
  let initialPassword = empty;

  //   Add character if an option is checked

  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(pLength.value, initialPassword);
});

// copy function
const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  if (password.value === "") {
    alert("Please Generate Password");
  } else {
    password.select();
    document.execCommand("Copy");
    alert("Password has been copied to clipboard");
  }
});
