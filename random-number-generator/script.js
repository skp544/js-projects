// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);

const num = document.querySelector(".num");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  num.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);
