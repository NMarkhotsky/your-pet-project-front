import { useState } from 'react';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main, IconTeamLookBox } from './SharedLayout.styled';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon/Icon';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { useAddPet } from '../../hooks';
import { Loader } from '../../shared/components/Loader/Loader';
import { useTranslation } from 'react-i18next';

function SharedLayout() {
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const { isRefreshing } = useAuth();
  const { moreInfo } = useAddPet();
  useTranslation();

  const handleIconClick = () => {
    setIsTeamVisible(!isTeamVisible);
  };

  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <IconTeamLookBox onClick={handleIconClick}>
        <Icon iconName={'icon-paw-team'} />
      </IconTeamLookBox>
      {isRefreshing || moreInfo.isLoad ? <Loader /> : null}
      {isTeamVisible && <Footer />}
    </>
  );
}

export default SharedLayout;
