import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { searchCity } from "./ApiController";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");
  let locationName = "Sydney, Australia";

  const display = (location) => {
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

  searchBarElement.addEventListener("keyup", (e) => {
    if (e.key === "Enter") alert("hello");
  });

  // run
  display(locationName);

  return { display };
};

export default createScreenController;
