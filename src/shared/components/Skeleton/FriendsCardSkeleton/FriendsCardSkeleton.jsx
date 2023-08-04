import {
  FriendItemSkeleton,
  FriendTitleSkeketon,
  FriendContentWrapperSkeleton,
  FriendImageWrapperSkeleton,
  FriendInfoListSkeleton,
  FriendInfoItemSkeleton,
  FriendInfoTitleSkeleton,
  FriendInfoTextSkeleton,
} from './FriendsCardSkeleton.styled';

// eslint-disable-next-line react/prop-types
const FriendCardSkeleton = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((card, i) => (
          <FriendItemSkeleton key={i}>
            <FriendTitleSkeketon inline={true} />
            <FriendContentWrapperSkeleton>
              <FriendImageWrapperSkeleton></FriendImageWrapperSkeleton>
              <FriendInfoListSkeleton>
                <FriendInfoItemSkeleton>
                  <FriendInfoTitleSkeleton inline={true} />
                  <FriendInfoTextSkeleton inline={true} />
                </FriendInfoItemSkeleton>
                <FriendInfoItemSkeleton>
                  <FriendInfoTitleSkeleton inline={true} />
                  <FriendInfoTextSkeleton inline={true} />
                </FriendInfoItemSkeleton>
                <FriendInfoItemSkeleton>
                  <FriendInfoTitleSkeleton inline={true} />
                  <FriendInfoTextSkeleton inline={true} />
                </FriendInfoItemSkeleton>
                <FriendInfoItemSkeleton>
                  <FriendInfoTitleSkeleton inline={true} />
                  <FriendInfoTextSkeleton inline={true} />
                </FriendInfoItemSkeleton>
              </FriendInfoListSkeleton>
            </FriendContentWrapperSkeleton>
          </FriendItemSkeleton>
        ))}
    </>
  );
};

export default FriendCardSkeleton;
