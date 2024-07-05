import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { getUnit } from "../components/header/unitToggles";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");

  const display = (locationId, unit) => {
    header();
    todayDetails(locationId, unit);
    forecast(locationId, unit);
  };

  const displayWeatherOfLocation = (e) => {
    const locationId = e.target.dataset.locationid;
    if (locationId === undefined) return;
    display(locationId, getUnit());
  };

  searchBarElement.addEventListener("change", displayWeatherOfLocation);

  // run
  const initialLocationId = "136022"; // sydney
  display(initialLocationId, getUnit());
};

export default createScreenController;
