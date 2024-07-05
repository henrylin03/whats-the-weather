import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { searchCity } from "./ApiController";

const searchBarElement = document.querySelector("#searchbar");

const createScreenController = () => {
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

  searchBarElement.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      locationName = searchBarElement.value;
      display();
    }
  });

  // run
  display();
};

const showResults = () => {
  return;
};

export default createScreenController;
