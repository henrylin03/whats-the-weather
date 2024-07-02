const createAppController = () => {
  const API_KEY = "59be934c1e9141e8847232908240207";

  const getWeatherAtLocation = (location) => {
    console.log(location);
  };

  return { getWeatherAtLocation };
};

export default createAppController;
