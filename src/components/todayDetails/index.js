import "./index.css";
import createAppController from "../../controllers/App";
import display from "./display";

const todayDetails = async (location) => {
  const app = createAppController();

  try {
    const weatherData = await app.getWeather(location);
    const currentWeatherData = weatherData.current;
    display(currentWeatherData);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default todayDetails;
