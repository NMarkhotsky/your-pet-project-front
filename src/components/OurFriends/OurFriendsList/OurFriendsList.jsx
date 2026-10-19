import { useState } from 'react';
import PropTypes from 'prop-types';
import { OurFriendItem } from '../OurFriendItem/OurFriendItem';
import { FriendsContainer, FriendsList } from './OurFriendsList.styled';
import FriendCardSkeleton from '../../../shared/components/Skeleton/FriendsCardSkeleton/FriendsCardSkeleton';

export const OurFriendsList = ({ items, isLoading = false }) => {
  const [hoveredTime, setHoveredTime] = useState('');

  const handleTimeHover = index => {
    setHoveredTime(index);
  };

  return (
    <FriendsContainer>
      <FriendsList>
        {!isLoading ? (
          <OurFriendItem
            items={items}
            handleTimeHover={handleTimeHover}
            hoveredTime={hoveredTime}
          />
        ) : (
          <FriendCardSkeleton count={10} />
        )}
      </FriendsList>
    </FriendsContainer>
  );
};

OurFriendsList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};
