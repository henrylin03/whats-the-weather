import getWeather from "./getWeather";
import searchCity from "./searchCity";

const createAppController = () => {
  return { getWeather, searchCity };
};

export default createAppController;
