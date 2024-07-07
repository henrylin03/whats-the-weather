import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";

const createScreenController = () => {
  const title = document.querySelector("#page-name");
  const searchBarElement = document.querySelector("#searchbar");
  const btnsContainer = document.querySelector(".unit-btns");
  const unitBtns = [...btnsContainer.children];

  // initial states
  let locationId = "136022"; // sydney
  let unit = "celsius";

  // event handlers
  const displayWeatherOfLocation = (e) => {
    const selectedLocationId = e.target.dataset.locationid;
    if (selectedLocationId === undefined) return;
    locationId = selectedLocationId;
    display(locationId, unit);
  };

  const updateUnits = (e) => {
    if (e.target.classList.contains("selected")) return;
    unit = e.target.id;
    display(locationId, unit);
  };

  // attach event listeners
  title.addEventListener("mousedown", () => display(locationId, unit));
  searchBarElement.addEventListener("change", displayWeatherOfLocation);
  unitBtns.forEach((btn) => btn.addEventListener("mousedown", updateUnits));

  // run
  display(locationId, unit);
};

const display = (locationId, unit) => {
  header();
  todayDetails(locationId, unit);
  forecast(locationId, unit);
};

export default createScreenController;
