import "./index.css";
import { searchCity } from "../../controllers/ApiController";

const header = (searchStr) => {
  // initial state of the app will be sydney
  // on input of any non-space text in the search for city (event)...
  // make api call to the "search/autocomplete" api for location [need branch to test this in console to see what actually comes back]
  searchCity(searchStr);
};

export default header;
