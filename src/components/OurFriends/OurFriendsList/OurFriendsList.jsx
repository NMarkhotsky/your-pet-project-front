import { useState } from 'react';
import PropTypes from 'prop-types';
import { OurFriendItem } from '../OurFriendItem/OurFriendItem';
import { FriendsContainer, FriendsList } from './OurFriendsList.styled';

export const OurFriendsList = ({ items }) => {
  const [hoveredTime, setHoveredTime] = useState('');

  const handleTimeHover = index => {
    setHoveredTime(index);
  };

  return (
    <FriendsContainer>
      <FriendsList>
        <OurFriendItem
          items={items}
          handleTimeHover={handleTimeHover}
          hoveredTime={hoveredTime}
        />
      </FriendsList>
    </FriendsContainer>
  );
};

OurFriendsList.propTypes = {
  items: PropTypes.array.isRequired,
};
