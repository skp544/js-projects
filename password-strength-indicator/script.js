let state;
const password = document.querySelector("#password");
const passwordStrength = document.querySelector("#password-strength");

const lowUpperCase = document.querySelector(".low-upper-case i");
const number = document.querySelector(".number i");
const specialChar = document.querySelector(".special-char i");
const eightChar = document.querySelector(".eight-char i");

const showPassword = document.querySelector(".show-pass");
const eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", togglePass);

eyeIcon.addEventListener("click", toggleEye);

password.addEventListener("keyup", () => {
  let pass = password.value;
  checkStrength(pass);
});

function togglePass() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    password.classList.replace;
    state = true;
  }
}

function toggleEye() {
  eyeIcon.classList.toggle("fa-eye-slash");
}

// check password strength

function checkStrength(pass) {
  let strength = 0;
  // check lower and uppercase
  if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    addCheck(lowUpperCase);
  } else {
    removeCheck(lowUpperCase);
  }

  if (pass.match(/([0-9])/)) {
    strength += 1;
    addCheck(number);
  } else {
    removeCheck(number);
  }

  if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    addCheck(specialChar);
  } else {
    removeCheck(specialChar);
  }

  if (pass.length > 7) {
    strength += 1;
    addCheck(eightChar);
  } else {
    removeCheck(eightChar);
  }

  // update a progress bar

  if (strength == 1) {
    strengthColor("pb-danger", 25);
  } else if (strength == 2) {
    strengthColor("pb-warning", 50);
  } else if (strength == 3) {
    strengthColor("pb-primary", 75);
  } else if (strength == 4) {
    strengthColor("pb-success", 100);
  }
}

function strengthColor(color, width) {
  passwordStrength.classList.remove(
    "pb-danger",
    "pb-warning",
    "pb-primary",
    "pb-success"
  );

  passwordStrength.classList.add(color);
  passwordStrength.style = `width: ${width}%`;
}

// Add check icons
function addCheck(charReq) {
  charReq.classList.remove("fa-circle");
  charReq.classList.add("fa-check");
}

// Remove check icons

function removeCheck(charReq) {
  charReq.classList.add("fa-circle");
  charReq.classList.remove("fa-check");
}
