import header from "../components/header";
import todayDetails from "../components/todayDetails";
import forecast from "../components/forecast";

const createScreenController = () => {
  const searchBarElement = document.querySelector("#searchbar");

  let locationName = "Sydney, New South Wales, Australia";

  const display = (location = locationName) => {
    header(location);
    todayDetails(location);
    forecast(location);
  };

  searchBarElement.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      locationName = searchBarElement.value;
      display();
    }
  });

  // run
  display();
};

export default createScreenController;
