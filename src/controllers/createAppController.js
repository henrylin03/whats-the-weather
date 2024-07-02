const createAppController = () => {
  const getWeatherAtLocation = (location) => {
    console.log(location);
  };

  return { getWeatherAtLocation };
};

export default createAppController;
