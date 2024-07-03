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

  const currentTempCelsius = weatherObj.current.temp_c.toFixed(0);
  currentTemperatureElement.textContent = `${currentTempCelsius}°`;

  const rainChance =
    weatherObj.forecast.forecastday[0].day.daily_chance_of_rain;
  chanceOfRainElement.textContent = `${rainChance}%`;

  const windSpeed = weatherObj.current.wind_kph.toFixed(0);
  windSpeedElement.textContent = `${windSpeed}km/h`;

  const lastUpdatedDateTime = weatherObj.current.last_updated;
  updatedTimeElement.textContent = getLastUpdatedTime(lastUpdatedDateTime);
};

const getLastUpdatedTime = (lastUpdatedStr) => {
  const dateObj = new Date(lastUpdatedStr);
  return dateObj.toLocaleTimeString();
  // extract just the time, and convert to 12hr format (AM PM suffix)
  // extract the timezone name and attach it on
};

export default display;
