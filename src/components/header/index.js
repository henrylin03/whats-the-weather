import "./index.css";
import { searchCity } from "../../controllers/ApiController";

const searchBarElement = document.querySelector("#searchbar");
const searchResultsContainerElement =
  document.querySelector(".results-container");

const header = (location) => {
  searchBarElement.value = location;

  searchBarElement.addEventListener("input", handleSearchInput);
  searchBarElement.addEventListener("focus", handleSearchInput);
  searchBarElement.addEventListener("blur", hideSearchResultsContainer);
  searchBarElement.addEventListener("focus", () => searchBarElement.select());
};

const handleSearchInput = async (e) => {
  hideSearchResultsContainer();

  const searchInput = searchBarElement.value;
  if (searchInput.trim().length < 3) return;

  const resultsArray = await searchCity(searchBarElement.value);
  const noResults = !resultsArray || !resultsArray.length;

  if (noResults)
    return searchResultsContainerElement.classList.add("no-results");
  searchResultsContainerElement.classList.add("results");
  displaySearchResults(resultsArray);
};

const displaySearchResults = (resultsArray) => {
  const resultsListElement = document.querySelector(".results-container ul");

  // clears all previous items
  resultsListElement.replaceChildren();

  resultsArray.forEach((location) => {
    const item = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${location.name}, ${location.region}, ${location.country}`;
    btn.setAttribute("data-location-id", location.id);

    item.appendChild(btn);
    resultsListElement.appendChild(item);
  });
};

const hideSearchResultsContainer = () => {
  searchResultsContainerElement.classList.remove("no-results");
  searchResultsContainerElement.classList.remove("results");
};

export default header;
