import getConditionIconUrl from "../../helpers/getConditionIconUrl";

const weatherIconElement = document.querySelector(
  "#today-details .weather img",
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

const display = (weatherObj, unit) => {
  console.log(weatherObj);

  const currentConditionCode = weatherObj.current.condition.code;
  const isDay = weatherObj.current.is_day;
  weatherIconElement.src = getConditionIconUrl(currentConditionCode, isDay);

  const currentTemp =
    unit === "celsius" ? weatherObj.current.temp_c : weatherObj.current.temp_f;
  currentTemperatureElement.textContent = `${currentTemp.toFixed(0)}°`;

  const rainChance =
    weatherObj.forecast.forecastday[0].day.daily_chance_of_rain;
  chanceOfRainElement.textContent = `${rainChance}%`;

  const windSpeed =
    unit === "celsius"
      ? `${weatherObj.current.wind_kph.toFixed(0)}km/h`
      : `${weatherObj.current.wind_mph.toFixed(0)}mph`;
  windSpeedElement.textContent = windSpeed;

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
