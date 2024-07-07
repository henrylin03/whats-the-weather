import map from "../data/current_conditions_to_icon_map.json";

const getCurrentConditionIconUrl = (conditionCode, isDay) => {
  const BASE_URL =
    "https://basmilius.github.io/weather-icons/production/fill/all";

  const svgName = map[conditionCode][isDay].svg;
  const svgFileName = `${svgName}.svg`;

  return `${BASE_URL}/${svgFileName}`;
};

export default getCurrentConditionIconUrl;
