import createAppController from "./createAppController";

const createScreenController = () => {
  const app = createAppController();
  const locationName = "Sydney";

  app.getWeather(locationName);

  return;
};

export default createScreenController;
