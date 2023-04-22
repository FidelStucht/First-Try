let day = document.querySelector(".date");
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = days[now.getDay()];
let timeStr =
  weekday.toString().padStart(2, "0") +
  ", " +
  hours.toString().padStart(2, "0") +
  ":" +
  minutes.toString().padStart(2, "0");
day.innerHTML = timeStr;

let searchInput = document.getElementById("floatingTextarea");
let cityName = document.getElementById("city-name");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let searchedCity = searchInput.value;
    cityName.textContent = searchedCity;
  }
});

let h3 = document.querySelector(".h3");

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = ` ${temperature}° C`;
}
navigator.geolocation.getCurrentPosition(retrievePosition);
