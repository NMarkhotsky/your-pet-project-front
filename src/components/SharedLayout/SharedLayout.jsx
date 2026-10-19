import { useLocation } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main, IconTeamLookBox } from './SharedLayout.styled';
const Footer = lazy(() => import('../Footer/Footer').then(module => ({ default: module.Footer })));
import { Icon } from '../Icon/Icon';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { useAddPet } from '../../hooks';
import { Loader } from '../../shared/components/Loader/Loader';
import { useTranslation } from 'react-i18next';

function SharedLayout() {
  const { pathname } = useLocation();
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
      <Main key={pathname}>
        <AppRoutes />
      </Main>
      <IconTeamLookBox onClick={handleIconClick}>
        <Icon iconName={'icon-paw-team'} />
      </IconTeamLookBox>
      {isRefreshing || moreInfo.isLoad ? <Loader /> : null}
      {isTeamVisible && <Suspense fallback={<Loader />}><Footer /></Suspense>}
    </>
  );
}

export default SharedLayout;
