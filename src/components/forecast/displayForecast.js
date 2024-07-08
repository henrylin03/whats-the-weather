import getForecastConditionIconUrl from "../../helpers/getForecastConditionIconUrl";

const forecastSection = document.querySelector("#forecast");
const cards = [...forecastSection.children];

const displayForecast = (forecastArr, unit) => {
  forecastArr.forEach((day, idx) => {
    const currentCard = cards[idx];
    const maxTempValue =
      unit === "celsius" ? day.day.maxtemp_c : day.day.maxtemp_f;
    const minTempValue =
      unit === "celsius" ? day.day.mintemp_c : day.day.mintemp_f;

    // any days after 'today' and 'tomorrow
    if (idx > 1) {
      const dayElement = currentCard.querySelector(".day");
      dayElement.textContent = getDayOfTheWeek(day.date);
    }

    const weatherTextElement = currentCard.querySelector(".weather");
    weatherTextElement.textContent = day.day.condition.text;

    const conditionCode = day.day.condition.code;
    const weatherImgElement = currentCard.querySelector(".icon img");
    weatherImgElement.src = getForecastConditionIconUrl(conditionCode);

    const maxTempElement = currentCard.querySelector(".max-temp");
    maxTempElement.textContent = `${maxTempValue.toFixed(0)}°`;
    const minTempElement = currentCard.querySelector(".min-temp");
    minTempElement.textContent = `/${minTempValue.toFixed(0)}°`;

    const chanceOfRainElement = currentCard.querySelector(
      ".rain-chance-container>p",
    );
    const chanceOfRain = day.day.daily_chance_of_rain;
    chanceOfRainElement.textContent = `${chanceOfRain}%`;
  });
};

const getDayOfTheWeek = (dateStr) => {
  const DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObject = new Date(dateStr);
  return DAY_NAMES[dateObject.getDay()];
};

export default displayForecast;
