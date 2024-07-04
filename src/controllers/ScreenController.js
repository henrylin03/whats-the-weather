import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { searchCity } from "./ApiController";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");
  let locationName = "Sydney, Australia";

  const display = (location = locationName) => {
    header(location);
    todayDetails(location);
    forecast(location);
  };

  searchBarElement.addEventListener("input", (e) => {
    const searchInput = searchBarElement.value;
    if (searchInput.trim().length < 3 || e.inputType == "deleteContentBackward")
      return;
    searchCity(searchBarElement.value);
  });

  // run
  display();
};

export default createScreenController;
