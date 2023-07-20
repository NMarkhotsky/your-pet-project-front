import { Bar, FormPagination, Option, PaginationItem } from "./FormPaginationList.styled";

const createColor = ({ currentPage, type }) => {
  switch (type) {
    case "text":
      if (currentPage === 1) {
        return "current";
      } else if (currentPage > 1) {
        return "select";
      } else if (currentPage < 1) {
        return "ordinary"
      }
    break;
    case "bar":
      if (currentPage === 1) {
        return "current";
      } else if (currentPage > 1) {
        return "select";
      } else if (currentPage < 1) {
        return "opacity-ordinary"
      }
    break;
  }
}

function FormPaginationList({ currentPage }) {
  return (
    <>
      <FormPagination>
        <PaginationItem>
          <Option variant={currentPage === 0 ? "current" : "select"}>Choose option</Option>
          <Bar variant={currentPage === 0 ? "current" : "select"} />
        </PaginationItem>
        <PaginationItem>
          <Option variant={createColor({ currentPage, type: "text" })}>Personal details</Option>
          <Bar variant={createColor({ currentPage, type: "bar" })} />
        </PaginationItem>
        <PaginationItem>
          <Option variant="ordinary">More info</Option>
          <Bar variant="opacity-ordinary" />
        </PaginationItem>
      </FormPagination>
    </>
  )
};

export default FormPaginationList;