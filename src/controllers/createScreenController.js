import createAppController from "./createAppController";
import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";

const createScreenController = () => {
  const app = createAppController();
  const locationName = "Sydney";

  app.getWeather(locationName);

  return;
};

export default createScreenController;
