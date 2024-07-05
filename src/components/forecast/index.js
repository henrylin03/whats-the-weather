import "./index.css";
import { getWeather } from "../../controllers/ApiController";
import displayForecast from "./displayForecast";

const forecast = async (locationId, unit) => {
  try {
    const weatherData = await getWeather(locationId);
    const forecastArray = weatherData.forecast.forecastday;
    displayForecast(forecastArray, unit);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default forecast;
