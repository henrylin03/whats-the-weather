import map from "../data/forecast_conditions_to_icon_map.json";

const getForecastConditionIconUrl = (conditionCode) => {
  const BASE_URL =
    "https://basmilius.github.io/weather-icons/production/fill/all";

  const svgName = map[conditionCode].svg;
  const svgFileName = `${svgName}.svg`;

  return `${BASE_URL}/${svgFileName}`;
};

export default getForecastConditionIconUrl;
