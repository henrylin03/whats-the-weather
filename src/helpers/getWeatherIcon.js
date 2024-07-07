import map from "../data/conditions_to_icon_map.json";

const getWeatherIcon = (conditionCode, isDay) => {
  console.log(map);
  // based on the conditionCode, and whether it is day time (that would be the index - as 0 would be day, 1 would be night usually)...

  // call the object and get the svg. return the actual svg itself (maybe not the path) so that it can just be called as `element.innerHTML = getWeatherIcon(...)`
}; // returns the svg

export default getWeatherIcon;
