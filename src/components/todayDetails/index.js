import "./index.css";
import { getWeather } from "../../controllers/ApiController";
import display from "./display";

const todayDetails = async (location) => {
  try {
    const weatherData = await getWeather(location);
    display(weatherData);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default todayDetails;
