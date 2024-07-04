import header from "../../components/header";
import todayDetails from "../../components/todayDetails";
import forecast from "../../components/forecast";

const createScreenController = () => {
  const locationName = "Sydney";

  // run
  todayDetails(locationName);
  forecast(locationName);
};

export default createScreenController;
