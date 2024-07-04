const API_KEY = "59be934c1e9141e8847232908240207";
const BASE_URL = "http://api.weatherapi.com/v1";

const getWeather = async (location) => {
  const FORECAST_DAYS = 3; // today counts as 1 day

  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&days=${FORECAST_DAYS}&q=${location}`,
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

const searchCity = async (searchStr) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${searchStr}`,
      { mode: "cors" },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There is a problem with your search: ", error);
  }
};

export { getWeather, searchCity };
