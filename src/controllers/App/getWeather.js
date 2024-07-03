const getWeather = async (location) => {
  const API_KEY = "59be934c1e9141e8847232908240207";
  const FORECAST_DAYS = 3; // today counts as 1 day

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=${FORECAST_DAYS}&q=${location}`,
      { mode: "cors" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There has been a problem with fetching from the WeatherAPI",
      err,
    );
  }
};

export default getWeather;
