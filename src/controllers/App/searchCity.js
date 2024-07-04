const searchCity = async (searchStr) => {
  const API_KEY = "59be934c1e9141e8847232908240207";

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchStr}`,
      { mode: "cors" },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There is a problem with your search: ", error);
  }
};

export default searchCity;
