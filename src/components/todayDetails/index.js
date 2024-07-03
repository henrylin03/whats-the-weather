import "./index.css";
import createAppController from "../../controllers/App";
import display from "./display";

const todayDetails = async (location) => {
  const app = createAppController();

  try {
    const weatherData = await app.getWeather(location);
    display(weatherData);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default todayDetails;
