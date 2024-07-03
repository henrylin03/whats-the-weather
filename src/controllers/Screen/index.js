import createAppController from "../App";
import header from "../../components/header";
import todayDetails from "../../components/todayDetails";
import forecast from "../../components/forecast";

const createScreenController = () => {
  const app = createAppController();
  const locationName = "Sydney";

  // run
  // console.log(app.getWeather(locationName));
  app.getForecastData(locationName);
};

export default createScreenController;
