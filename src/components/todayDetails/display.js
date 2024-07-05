const weatherIconElement = document.querySelector(
  "#today-details .weather .icon",
);
const currentTemperatureElement = document.querySelector(
  "#today-details .temperature-text",
);
const chanceOfRainElement = document.querySelector(
  "#today-details .chance-of-rain .property-value",
);
const windSpeedElement = document.querySelector(
  "#today-details .wind-speed .property-value",
);
const updatedTimeElement = document.querySelector(".last-updated-time");

const display = (weatherObj) => {
  console.log(weatherObj);

  const weatherIconImg = new Image();
  weatherIconImg.src = weatherObj.current.condition.icon;
  weatherIconElement.appendChild(weatherIconImg);

  const currentTempCelsius = weatherObj.current.temp_c.toFixed(0);
  currentTemperatureElement.textContent = `${currentTempCelsius}°`;

  const rainChance =
    weatherObj.forecast.forecastday[0].day.daily_chance_of_rain;
  chanceOfRainElement.textContent = `${rainChance}%`;

  const windSpeed = weatherObj.current.wind_kph.toFixed(0);
  windSpeedElement.textContent = `${windSpeed}km/h`;

  const lastUpdatedUnixTime = weatherObj.current.last_updated_epoch;
  updatedTimeElement.textContent = getLastUpdatedTime(lastUpdatedUnixTime);
};

const getLastUpdatedTime = (unixTime) =>
  new Date(unixTime * 1000).toLocaleTimeString(navigator.language, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

export default display;
