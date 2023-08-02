/* eslint-disable react/prop-types */
import { NoticeCard } from '../NoticeCard/NoticeCard';
import { List } from '../NoticeCard/NoticeCard.styled';

const NoticesCategoriesList = ({ notices, handleDeleteNotice }) => {
  return (
    <>
      {notices && (
        <List>
          {notices.map(item => (
            <NoticeCard
              key={item.id}
              item={item}
              handleDeleteNotice={handleDeleteNotice}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default NoticesCategoriesList;
