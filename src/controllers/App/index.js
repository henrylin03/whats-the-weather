import getWeather from "./getWeather";

const createAppController = () => {
  const getForecastData = async (location) => {
    const weatherData = await getWeather(location);
    const forecastData = await weatherData.forecast;
    const forecastArray = forecastData.forecastday;

    return forecastArray;
  };

  return { getForecastData };
};

export default createAppController;
