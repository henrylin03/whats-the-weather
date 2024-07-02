const createAppController = () => {
  const API_KEY = "59be934c1e9141e8847232908240207";

  const getWeather = async (location) => {
    try {
    } catch (error) {
      console.error(
        "There has been a problem with fetching from the WeatherAPI",
        err,
      );
    }
  };

  return { getWeather };
};

export default createAppController;
