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

const handleSearchInput = async (e) => {
  const searchResultsContainerElement =
    document.querySelector(".results-container");
  const searchInput = searchBarElement.value;
  if (searchInput.trim().length < 3) return;

  const resultsArray = await searchCity(searchBarElement.value);
  const noResults = !resultsArray || !resultsArray.length;

  if (noResults) searchResultsContainerElement.classList.add("no-results");
  // if async/await returns non-empty array, display those results in the div

  //todo: clearing the text input OR calling again means the error message goes away

  // ? how do we then return the actual current location back to the text box? maybe on no focus?

  // nb: it's possible that we need to clear the ul every time
  return;
};

export default createScreenController;
