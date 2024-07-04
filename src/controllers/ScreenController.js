import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");

  const locationName = "sdy";

  // api seems to only kick in after at least 3 characters are put in... don't call api until then

  searchBarElement.addEventListener("input", () =>
    console.log(searchBarElement.value),
  );

  // run
  header(locationName);
  todayDetails(locationName);
  forecast(locationName);
};

export default createScreenController;
