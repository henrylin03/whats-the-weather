import map from "../data/conditions_to_icon_map.json";

const getWeatherIcon = (conditionCode, isDay) => {
  const svgName = map[conditionCode][isDay].svg;
  const svgFileName = `${svgName}.svg`;

  console.log(svgFileName);

  // call the object and get the svg. return the actual svg itself (maybe not the path) so that it can just be called as `element.innerHTML = getWeatherIcon(...)`
}; // returns the svg

export default getWeatherIcon;
