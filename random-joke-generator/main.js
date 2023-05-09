//
const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const url =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-RapidAPI-Key": "dd0887f209msha8d86ac14a0bce2p18f588jsn230544dc8b3d",
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    joke.innerHTML = data?.value;
  } catch (error) {
    joke.innerHTML = error.messsage;
  }

  //   fetch(url, options)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data?.value);

  //       joke.innerHTML = data?.value;
  //     });
}
