const forecastSection = document.querySelector("#forecast");
const cards = [...forecastSection.children];

const displayForecast = (forecastArr) => {
  forecastArr.forEach((day, idx) => {
    const currentCard = cards[idx];

    // any days after 'today' and 'tomorrow
    if (idx > 1) {
      const dayElement = currentCard.querySelector(".day");
      dayElement.textContent = getDayOfTheWeek(day.date);
    }

    const weatherTextElement = currentCard.querySelector(".weather");
    weatherTextElement.textContent = day.day.condition.text;

    const weatherFigureElement = currentCard.querySelector(".icon");

    const maxTempElement = currentCard.querySelector(".max-temp");
    const maxTemp = day.day.maxtemp_c.toFixed(0);
    maxTempElement.textContent = `${maxTemp}°`;
    const minTempElement = currentCard.querySelector(".min-temp");
    const minTemp = day.day.mintemp_c.toFixed(0);
    minTempElement.textContent = `/${minTemp}°`;

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
