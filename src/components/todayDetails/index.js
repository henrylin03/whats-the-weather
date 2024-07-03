import "./index.css";
import createAppController from "../../controllers/App";

const todayDetails = async (location) => {
  const app = createAppController();

  try {
    const weatherData = await app.getWeather(location);
    const currentWeatherData = weatherData.current;

    console.log(currentWeatherData);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default todayDetails;
