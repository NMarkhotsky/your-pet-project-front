import { useEffect, useState } from 'react';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import { Section, TitleWrapper } from './OurFriendsPage.styled';
import { getOurFriends } from '../../services/OurFriendsApi';
import { OurFriendsList } from '../../components/OurFriends/OurFriendsList/OurFriendsList';
import { Loader } from '../../shared/components/Loader/Loader';

function OurFriendsPage() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const friends = await getOurFriends();

        setFriends(friends);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Section>
      <TitleWrapper>
        <TitlePage>Our friends</TitlePage>
      </TitleWrapper>
      <OurFriendsList items={friends} />
      {isLoading ? <Loader /> : null}
    </Section>
  );
}

export default OurFriendsPage;
