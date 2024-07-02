import createAppController from "./createAppController";

const createScreenController = () => {
  const app = createAppController();
  const locationName = "Sydney";

  app.getWeatherAtLocation(locationName);

  return;
};

export default createScreenController;
