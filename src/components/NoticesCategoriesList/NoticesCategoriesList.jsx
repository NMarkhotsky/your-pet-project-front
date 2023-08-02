import PropTypes, { shape } from 'prop-types';
import { NoticeCard } from '../NoticeCard/NoticeCard';
import { List } from '../NoticeCard/NoticeCard.styled';
import { NoInfoPart } from '../NoInfoPart/NoInfoPart';

const NoticesCategoriesList = ({ notices, handleDeleteNotice }) => {
  return (
    <>
      {notices.length > 0 ? (
        <List>
          {notices.map(item => (
            <NoticeCard
              key={item.id}
              item={item}
              handleDeleteNotice={handleDeleteNotice}
            />
          ))}
        </List>
      ) : (
        <NoInfoPart />
      )}
    </>
  );
};

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
  notices: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteNotice: PropTypes.func,
};
