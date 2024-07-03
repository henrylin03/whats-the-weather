import getWeather from "./getWeather";

const createAppController = () => {
  const getForecastData = async (location) => {
    const data = await getWeather(location);
    const forecastArray = await data.forecast.forecastday;

    console.log(forecastArray);
    return forecastArray;
  };

  return { getForecastData };
};

export default createAppController;
