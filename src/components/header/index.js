import "./index.css";
import { searchCity } from "../../controllers/ApiController";

const searchBarElement = document.querySelector("#searchbar");
const searchResultsContainerElement =
  document.querySelector(".results-container");

const header = () => {
  searchBarElement.addEventListener("input", handleSearchInput);
  searchBarElement.addEventListener("focus", (e) => {
    e.target.select(); // select all text, ready for deletion
    handleSearchInput;
  });
  searchBarElement.addEventListener("blur", hideSearchResultsContainer);
};

const handleSearchInput = async () => {
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
    btn.setAttribute("data-id", location.id);
    btn.addEventListener("mousedown", handleClickOnLocationOption);

    item.appendChild(btn);
    resultsListElement.appendChild(item);
  });
};

const handleClickOnLocationOption = (e) => {
  const selectedLocationId = e.target.dataset.id;
  const selectedLocationName = e.target.textContent;

  searchBarElement.setAttribute("data-locationid", selectedLocationId);
  searchBarElement.value = selectedLocationName;

  hideSearchResultsContainer();
};

const hideSearchResultsContainer = () => {
  searchResultsContainerElement.classList.remove("no-results");
  searchResultsContainerElement.classList.remove("results");
};

export default header;
