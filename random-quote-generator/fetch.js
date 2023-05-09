const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const url = "https://type.fit/api/quotes";

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert("Please Enter A Number");
  } else {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = shuffle(data);
        // console.log(JSON.stringify(data));

        let output = "";

        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
              <li>Quote: ${data[i].text}</li>
              <li>Author: ${data[i].author}</li>
              <hr>
           `;
        }

        document.querySelector(".quotes").innerHTML = output;
      });
  }
}

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // while elements exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);

    // Decrease CI by 1
    CI--;

    // swap the last element with cCI

    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
