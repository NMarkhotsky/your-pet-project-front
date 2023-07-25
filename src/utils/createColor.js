export const createColor = ({ currentPage, type, num }) => {
  switch (type) {
    case "text":
      if (currentPage === num) {
        return "current";
      } else if (currentPage > num) {
        return "select";
      } else if (currentPage < num) {
        return "ordinary"
      }
    break;
    case "bar":
      if (currentPage === num) {
        return "current";
      } else if (currentPage > num) {
        return "select";
      } else if (currentPage < num) {
        return "opacity-ordinary"
      }
    break;
  }
}
