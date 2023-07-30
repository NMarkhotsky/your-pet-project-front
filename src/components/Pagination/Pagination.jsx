import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';

import { StyledPaginateContainer } from './Pagination.styled';

export const Pagination = ({ handlePageChange, pageCount = 1 }) => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        nextLabel={<Icon iconName={'icon-pagination-arrow-right'}  width="16" height="7" />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<Icon iconName={'icon-pagination-arrow-left'}  width="16" height="7" />}
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
      />
    </StyledPaginateContainer>
  );
};

Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
};
