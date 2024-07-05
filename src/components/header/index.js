import "./index.css";

const header = (location) => {
  const searchBarElement = document.querySelector("#searchbar");
  searchBarElement.value = location;
  searchBarElement.addEventListener("focus", () => searchBarElement.select());
};

export default header;
