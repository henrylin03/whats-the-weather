import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { searchCity } from "./ApiController";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");
  const locationName = "sdy";

  // api seems to only kick in after at least 3 characters are put in... don't call api until then

  searchBarElement.addEventListener("input", (e) => {
    const searchInput = searchBarElement.value;

    if (searchInput.trim().length < 3 || e.inputType == "deleteContentBackward")
      return;
    searchCity(searchBarElement.value);
  });

  // run
  header(locationName);
  todayDetails(locationName);
  forecast(locationName);
};

export default createScreenController;
