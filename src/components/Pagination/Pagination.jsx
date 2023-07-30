import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { StyledPaginateContainer } from './Pagination.styled';

export const Pagination = ({
  handlePageChange,
  pageCount = 1,
  //   currentPage = 1,
}) => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="item"
        pageLinkClassName="link"
        previousClassName="item"
        previousLinkClassName="prevLink"
        nextClassName="item"
        nextLinkClassName="nextLink"
        breakLabel="..."
        breakClassName="item"
        breakLinkClassName="link"
        activeClassName="active"
        renderOnZeroPageCount={null}
        className="pagination"
        // forcePage={currentPage - 1}
      />
    </StyledPaginateContainer>
  );
};

Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
};
