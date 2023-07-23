import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import ourFriends from '../../temp/ourFriends.json';
import {
  FriendImgThumb,
  FriendInfo,
  FriendInfoData,
  FriendInfoThumb,
  FriendInfoTitle,
  FriendItem,
  FriendTitle,
  FriendWrapper,
  FriendsContainer,
  FriendsList,
  Img,
  Section,
  TitleWrapper,
} from './OurFriendsPage.styled';

function OurFriendsPage() {
  return (
    <Section>
      <TitleWrapper>
        <TitlePage>Our friends</TitlePage>
      </TitleWrapper>
      <FriendsContainer>
        <FriendsList>
          {ourFriends.map(friend => (
            <FriendItem key={friend.imageUrl}>
              <FriendTitle href={`${friend.url}`} target="_blank">
                {friend.title}
              </FriendTitle>
              <FriendWrapper>
                <FriendImgThumb>
                  <Img src={friend.imageUrl} />
                </FriendImgThumb>
                <FriendInfoThumb>
                  <FriendInfo>
                    <FriendInfoTitle>Time:</FriendInfoTitle>
                    <FriendInfoData>8:00 - 20:00</FriendInfoData>
                  </FriendInfo>
                  <FriendInfo>
                    <FriendInfoTitle>Address:</FriendInfoTitle>
                    <FriendInfoData>
                      {friend.address === null
                        ? 'Website only'
                        : friend.address}
                    </FriendInfoData>
                  </FriendInfo>
                  <FriendInfo>
                    <FriendInfoTitle>Email:</FriendInfoTitle>
                    <FriendInfoData>
                      {friend.email === null ? 'Telephone only' : friend.email}
                    </FriendInfoData>
                  </FriendInfo>
                  <FriendInfo>
                    <FriendInfoTitle>Phone:</FriendInfoTitle>
                    <FriendInfoData>
                      {friend.phone === null ? 'Email only' : friend.phone}
                    </FriendInfoData>
                  </FriendInfo>
                </FriendInfoThumb>
              </FriendWrapper>
            </FriendItem>
          ))}
        </FriendsList>
      </FriendsContainer>
    </Section>
  );
}

export default OurFriendsPage;
