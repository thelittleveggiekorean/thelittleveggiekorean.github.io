const timer = document.querySelector("#timer");

function handleTimer() {
  const today = new Date();
  const seconds = String(today.getSeconds()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const hours = String(today.getHours()).padStart(2, "0");

  timer.innerText = `${hours} : ${minutes} : ${seconds}`;
}
handleTimer();
setInterval(handleTimer, 1000);
