import PropTypes from 'prop-types';

import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ list }) => {
  return (
    <>
      {list.length > 0 && (
        <List>
          {list.map(article => (
            <NewsItem key={article._id} article={article} />
          ))}
        </List>
      )}
    </>
  );
};

NewsList.defaultProps = {
  list: [],
};

NewsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ),
  pageCount: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
