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

  searchBarElement.addEventListener("input", handleSearchInput);
  searchBarElement.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      locationName = searchBarElement.value;
      display();
    }
  });

  // run
  display();
};

const handleSearchInput = (e) => {
  const searchInput = searchBarElement.value;
  if (searchInput.trim().length < 3 || e.inputType == "deleteContentBackward")
    return;

  // use async/await to await for the array that gets returned by searchCity...

  // if async/await returns an empty array, then display the no-results div

  // if async/await returns non-empty array, display those results in the div

  // nb: it's possible that we need to clear the ul every time

  searchCity(searchBarElement.value);
  return;
};

export default createScreenController;
