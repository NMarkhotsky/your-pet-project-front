import { useState } from 'react';
import { TitlePage } from '../../shared/components/TitlePage/TitlePage';
import { Section, TitleWrapper } from './OurFriendsPage.styled';
import { getOurFriends } from '../../services/OurFriendsApi';
import { OurFriendsList } from '../../components/OurFriends/OurFriendsList/OurFriendsList';
import { t } from 'i18next';

import { useResource } from '../../hooks/useResource';
import { RequestError } from '../../shared/components/RequestError/RequestError';
import { NoInfoPart } from '../../components/NoInfoPart/NoInfoPart';
const fetchFriends = (_, options) => getOurFriends(options);

function OurFriendsPage() {
  const [revision, setRevision] = useState(0);
  const { data: friends = [], isLoading, error } = useResource(fetchFriends, {}, revision);

  return (
    <Section>
      <TitleWrapper>
        <TitlePage>{t('friends_title')}</TitlePage>
      </TitleWrapper>
      <OurFriendsList items={friends || []} isLoading={isLoading} />
      {error && <RequestError onRetry={() => setRevision(value => value + 1)} />}
      {!isLoading && !error && !friends?.length && <NoInfoPart />}
    </Section>
  );
}

export default OurFriendsPage;
