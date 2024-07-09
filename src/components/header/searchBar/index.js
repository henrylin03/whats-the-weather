import "./index.css";
import { searchCity } from "../../../controllers/ApiController";

const searchBarElement = document.querySelector("#searchbar");
const searchResultsContainerElement =
  document.querySelector(".results-container");
const clearSearchBarBtn = document.querySelector(".clear-text-btn");

const searchBar = () => {
  searchBarElement.addEventListener("input", handleSearchInput);

  searchBarElement.addEventListener("focus", (e) => {
    if (e.target.value) {
      e.target.select(); // select all text, ready for deletion
      clearSearchBarBtn.classList.remove("hidden");
    }
    handleSearchInput;
  });

  searchBarElement.addEventListener("blur", hideSearchResultsContainer);

  clearSearchBarBtn.addEventListener("mousedown", handleClickOnClearSearchBtn);
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

  // add event listener for enter key pressed
  searchBarElement.addEventListener(
    "keydown",
    ({ key }) => {
      if (!searchResultsContainerElement.classList.contains("results")) return;
      if (key === "Enter") {
        const firstResult = resultsArray[0];
        informSearchBarOfSelectedLocation({
          id: firstResult.id,
          name: `${firstResult.name}, ${firstResult.region}, ${firstResult.country}`,
        });
      }
      hideSearchResultsContainer();
    },
    { once: true },
  );
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
  const selectedLocation = {
    id: e.target.dataset.id,
    name: e.target.textContent,
  };

  informSearchBarOfSelectedLocation(selectedLocation);
  hideSearchResultsContainer();
};

const informSearchBarOfSelectedLocation = (locationObject) => {
  searchBarElement.setAttribute("data-locationid", locationObject.id);
  searchBarElement.value = locationObject.name;
};

const hideSearchResultsContainer = () => {
  searchResultsContainerElement.classList.remove("no-results");
  searchResultsContainerElement.classList.remove("results");
};

const handleClickOnClearSearchBtn = () => {
  searchBarElement.value = "";
  clearSearchBarBtn.classList.add("hidden");
  hideSearchResultsContainer();
};

export default searchBar;
