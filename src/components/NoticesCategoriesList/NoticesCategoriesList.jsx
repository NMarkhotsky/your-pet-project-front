import PropTypes, { shape } from 'prop-types';
import { NoticeCard } from '../NoticeCard/NoticeCard';
import { List } from '../NoticeCard/NoticeCard.styled';

const NoticesCategoriesList = ({ notices }) => {

  return <List>
      {notices && notices.map(item => <NoticeCard key={item.id} item={item} />)}
  </List>;
};

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
  notices: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};
