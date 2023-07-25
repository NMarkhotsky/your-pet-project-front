const colors = {
  current: "#54ADFF",
  select: "#00C3AD",
  ordinary: "#888",
  opacityOrdinary: "#CCE4FB",
}

export const generateColor = (props) => {
  switch (props.variant) {
    case "current":
      return colors.current;
    case "select":
      return colors.select;
    case "ordinary":
      return colors.ordinary;
    case "opacity-ordinary":
      return colors.opacityOrdinary;
    default:
      return "tomato";
  }
};
