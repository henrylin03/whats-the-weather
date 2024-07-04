import "./index.css";

const header = (location) => {
  const searchBarElement = document.querySelector("#searchbar");
  searchBarElement.value = location;
};

export default header;
