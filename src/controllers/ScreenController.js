import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";
import { getUnit } from "../components/header/unitToggles";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");

  // figure out which unit is being selected right now
  // console.log(getUnit());
  // pass that unit into display() as an arg

  // update each of the subsequent components accordingly

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
