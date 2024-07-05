const btnsContainer = document.querySelector(".unit-btns");
const unitBtns = [...btnsContainer.children];

const unitToggles = () => {
  const updateSelectedUnit = (e) => {
    if (e.target.classList.contains("selected")) return;
    unitBtns.forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.add("selected");
  };

  unitBtns.forEach((btn) =>
    btn.addEventListener("mousedown", updateSelectedUnit),
  );
};

const getUnit = () =>
  unitBtns.find((btnElement) => btnElement.classList.contains("selected")).id;

export { unitToggles, getUnit };
