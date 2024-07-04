import getWeather from "./getWeather";
import searchCity from "./searchCity";

const createAppController = () => {
  searchCity("search");
  return { getWeather, searchCity };
};

export default createAppController;
