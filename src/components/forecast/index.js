import "./index.css";
import getWeather from "../../controllers/Api/getWeather";
import displayForecast from "./displayForecast";

const forecast = async (location) => {
  try {
    const weatherData = await getWeather(location);
    const forecastArray = weatherData.forecast.forecastday;
    displayForecast(forecastArray);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default forecast;
