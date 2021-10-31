const API_KEY = "27240f6a2d49d61b82ff0ceb606c8a82";

function getPositionSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityName = document.querySelector("#weather p:nth-child(1)");
      const cityNameAndTemp = document.querySelector("#weather p:nth-child(2)");
      const cityWeather = data.weather[0].main;
      const cityTemp = data.main.temp;
      cityName.innerText = `🌎 ${data.name}`;
      cityNameAndTemp.innerText = `${cityWeather} / ${cityTemp} ℃`;
      c;
    });
}
function getPositionError() {
  alert("Position has not found");
}

navigator.geolocation.getCurrentPosition(getPositionSucess, getPositionError);
