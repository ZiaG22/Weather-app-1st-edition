function refreshWeather(response){
    let tempElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    console.log(temperature);
    tempElement.innerHTML = Math.round(temperature);

    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = response.data.city;

}




function searchCity(city){

let apiKey = "78e3cca87dof83c3428t5ba6e7fa0071";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`

axios.get(apiUrl).then(refreshWeather);}




let date = new Date();

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
let timeElement = document.querySelector("#time");
timeElement.innerHTML = formatDate(date);


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Tokyo");