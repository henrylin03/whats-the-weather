import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");

  const display = (locationId) => {
    header();
    todayDetails(locationId);
    forecast(locationId);
  };

  const displayWeatherOfLocation = (e) => {
    const locationId = e.target.dataset.locationid;
    if (locationId === undefined) return;
    display(locationId);
  };

  searchBarElement.addEventListener("change", displayWeatherOfLocation);

  // run
  const initialLocationId = "136022"; // sydney
  display(initialLocationId);
};

export default createScreenController;
