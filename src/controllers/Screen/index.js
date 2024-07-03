import createAppController from "../App";
import header from "../../components/header";
import todayDetails from "../../components/todayDetails";
import forecast from "../../components/forecast";

const createScreenController = () => {
  const app = createAppController();
  const locationName = "Sydney";

  // run
  forecast(locationName);
};

export default createScreenController;
