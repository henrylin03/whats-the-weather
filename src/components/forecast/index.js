import "./index.css";
import createAppController from "../../controllers/App";
import displayForecast from "./displayForecast";

const forecast = async (location) => {
  const app = createAppController();

  try {
    const weatherData = await app.getWeather(location);
    const forecastArray = weatherData.forecast.forecastday;
    displayForecast(forecastArray);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default forecast;
