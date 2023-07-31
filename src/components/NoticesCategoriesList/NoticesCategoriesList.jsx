import PropTypes, { shape } from 'prop-types';
import { NoticeCard } from '../NoticeCard/NoticeCard';
import { Pagination } from '../Pagination/Pagination';
import { List } from '../NoticeCard/NoticeCard.styled';

const NoticesCategoriesList = ({ notices, pageCount, handlePageChange }) => {

  return <List>
    {notices && notices.map(item => <NoticeCard key={item.id} item={item} />)}
    <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
  </List>;
};

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
  notices: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  pageCount: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
