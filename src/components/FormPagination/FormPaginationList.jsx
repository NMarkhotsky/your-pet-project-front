import { createColor } from "../../utils";
import { Bar, FormPagination, Option, PaginationItem } from "./FormPaginationList.styled";

function FormPaginationList({ currentPage }) {
  return (
    <>
      <FormPagination>
        <PaginationItem>
          <Option variant={currentPage === 0 ? "current" : "select"}>Choose option</Option>
          <Bar variant={currentPage === 0 ? "current" : "select"} />
        </PaginationItem>
        <PaginationItem>
          <Option variant={createColor({ currentPage, type: "text", num: 1 })}>Personal details</Option>
          <Bar variant={createColor({ currentPage, type: "bar", num: 1 })} />
        </PaginationItem>
        <PaginationItem>
          <Option variant={createColor({ currentPage, type: "text", num: 2 })}>More info</Option>
          <Bar variant={createColor({ currentPage, type: "bar", num: 2 })} />
        </PaginationItem>
      </FormPagination>
    </>
  )
};

export default FormPaginationList;