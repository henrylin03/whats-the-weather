import "./index.css";
import { getWeather } from "../../controllers/ApiController";
import display from "./display";

const todayDetails = async (locationId, unit) => {
  try {
    const weatherData = await getWeather(locationId);
    display(weatherData, unit);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

export default todayDetails;
