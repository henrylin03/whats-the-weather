const forecastSection = document.querySelector("#forecast");
const cards = [...forecastSection.children];

const displayForecast = (forecastArr) => {
  forecastArr.forEach((day, idx) => {
    const currentCard = cards[idx];

    const weatherText = currentCard.querySelector(".weather");
    weatherText.textContent = day.day.condition.text;

    // todo: icon for weather condition (start with using the api's i think)

    const maxTempText = currentCard.querySelector(".max-temp");
    const maxTemp = day.day.maxtemp_c.toFixed(0);
    maxTempText.textContent = `${maxTemp}°`;
    const minTempText = currentCard.querySelector(".min-temp");
    const minTemp = day.day.mintemp_c.toFixed(0);
    minTempText.textContent = `/${minTemp}°`;
  });
};

export default displayForecast;
