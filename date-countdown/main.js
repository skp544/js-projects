const countTo = "24 Oct 2023";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSec = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const minutes = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  const countDown = document.getElementById("countdown");

  countDown.textContent = `${days} Days, ${format(hours)}hrs : ${format(
    minutes
  )}min : ${format(sec)}sec`;

  if (totalSec < 0) {
    clearInterval(c);
    countDown.textContent = "Happy Birthday";
  }
}, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t;
}
