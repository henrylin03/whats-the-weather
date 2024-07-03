import "./index.css";
import createAppController from "../../controllers/App";

const forecast = async (location) => {
  const app = createAppController();

  try {
    const weatherData = await app.getWeather(location);
    const forecastArray = weatherData.forecast.forecastday;

    console.log(forecastArray);
  } catch (error) {
    console.error("Error when getting forecast data:", error);
  }
};

// find day of the week for the last day (the first two are just today and tomorrow)

// for each of the days in .forecast.forecastday...

// generate the div

// get the actual .day.condition.text (and then add the appropriate icon - they give you one in api but i like my tabler ones more!)

// get the maxtemp_c, and mintemp_c

export default forecast;
