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
const updatedTimeElement = document.querySelector(".time");

const display = (weatherObj) => {
  console.log(weatherObj);

  const currentTempCelsius = weatherObj.current.temp_c.toFixed(0);
  currentTemperatureElement.textContent = `${currentTempCelsius}°`;

  const rainChance =
    weatherObj.forecast.forecastday[0].day.daily_chance_of_rain;
  chanceOfRainElement.textContent = `${rainChance}%`;

  return;
};

export default display;
