const forecastSection = document.querySelector("#forecast");
const cards = [...forecastSection.children];

const displayForecast = (forecastArr) => {
  forecastArr.forEach((day, idx) => {
    const weatherText = cards[idx].querySelector(".weather");
    weatherText.textContent = day.day.condition.text;

    // todo: icon for weather condition (start with using the api's i think)
  });
  return;
};

export default displayForecast;
