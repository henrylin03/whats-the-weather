import getWeather from "./getWeather";

const createAppController = () => {
  const getForecastData = async (location) => {
    const weatherData = await getWeather(location);
    const forecastArray = await weatherData.forecast.forecastday;

    console.log(forecastArray);
    return forecastArray;
  };

  return { getForecastData };
};

export default createAppController;
