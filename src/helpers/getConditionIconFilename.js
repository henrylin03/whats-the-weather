import map from "../data/conditions_to_icon_map.json";

const getConditionIconFilename = (conditionCode, isDay) => {
  const svgName = map[conditionCode][isDay].svg;
  const svgFileName = `${svgName}.svg`;
  return svgFileName;
};

export default getConditionIconFilename;
