const apiKey = "6aaf0172c510ae4b86cb4ecb3a26b65c";

const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput");

const weatherCard = document.getElementById("weatherCard");

const error = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  getWeather(cityInput.value);
});

async function getWeather(city) {
  if (city === "") {
    alert("Please enter city name");
    return;
  }

  try {
    error.innerText = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new error("city not found");
    }

    const data = await response.json();

    console.log(data);

    displayWeather(data);
    
  } catch (err) {
    console.log(err);

    weatherCard.style.display = "none";

    error.innerText = err.message;
  }
}

function displayWeather(data) {
  weatherCard.style.display = "block";

  document.getElementById("cityName").innerText = data.name;

  document.getElementById("temperature").innerText =
    `${Math.round(data.main.temp)}°C`;

  document.getElementById("description").innerText =
    data.weather[0].description;

  document.getElementById("humidity").innerText = `${data.main.humidity}%`;

  document.getElementById("wind").innerText = `${data.wind.speed} km/h`;

  const iconCode = data.weather[0].icon;

  document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
