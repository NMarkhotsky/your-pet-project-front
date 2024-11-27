import { useEffect, useState } from 'react';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import { Section, TitleWrapper } from './OurFriendsPage.styled';
import { getOurFriends } from '../../services/OurFriendsApi';
import { OurFriendsList } from '../../components/OurFriends/OurFriendsList/OurFriendsList';
import { t } from 'i18next';

function OurFriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const friends = await getOurFriends();

        setFriends(friends);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <Section>
      <TitleWrapper>
        <TitlePage>{t('friends_title')}</TitlePage>
      </TitleWrapper>
      <OurFriendsList items={friends} />
    </Section>
  );
}

export default OurFriendsPage;
