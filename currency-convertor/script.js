const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");
const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "EUR",
    flag: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flag: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
  {
    name: "INR",
    flag: "https://www.worldometers.info/img/flags/in-flag.gif",
  },
];

const API_KEY = "3b755d86c26342c822a856e9";

const API_URL = "https://v6.exchangerate-api.com/v6/";

// https://v6.exchangerate-api.com/v6/3b755d86c26342c822a856e9/latest/USD

// get exchange rates

async function getExchangeRate() {
  const cur1Value = cur1.value;
  const cur2Value = cur2.value;

  // console.log(cur1Value);
  // console.log(cur2Value);

  const response = await fetch(`${API_URL}${API_KEY}/latest/${cur1Value}`);
  const data = await response.json();

  const rate = data?.conversion_rates[cur2Value];

  baseRate.textContent = `1 ${cur1Value} = ${rate} ${cur2Value} `;

  cur2Input.value = (cur1Input.value * rate).toFixed(2);

  // console.log(data);

  // console.log(data?.conversion_rates?.INR);
}

getExchangeRate();

// Add event listeners

cur1.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});

cur2.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});

cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

switchCur.addEventListener("click", () => {
  const cur1Val = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1Val;
  switchCur.classList.toggle("rotate");

  getExchangeRate();
  getFlag();
});

// Get Flag

function getFlag() {
  countries.forEach((country) => {
    // console.log(country.name);
    if (cur1.value == country.name) {
      // console.log(country.flag);
      const imgSrc = document.querySelector(".from img");
      imgSrc.setAttribute("src", country.flag);
    }

    if (cur2.value == country.name) {
      // console.log(country.flag);
      const imgSrc = document.querySelector(".to img");
      imgSrc.setAttribute("src", country.flag);
    }
  });
}
