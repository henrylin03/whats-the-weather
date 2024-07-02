import "./assets/styles/normalise.css";
import "./assets/styles/global.css";
import header from "./components/header";
import todayDetails from "./components/todayDetails";
import forecast from "./components/forecast";
import createScreenController from "./controllers/createScreenController";
import createAppController from "./controllers/createAppController";

createScreenController();
createAppController();
