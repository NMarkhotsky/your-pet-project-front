import { useState } from 'react';
import { Header } from '../Header/Header';
import AppRoutes from '../../routes/AppRoutes';
import { Main, IconTeamLookBox } from './SharedLayout.styled';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon/Icon';

function SharedLayout() {
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  const handleIconHover = () => {
    setIsTeamVisible(true);
  };

  const handleIconLeave = () => {
    setIsTeamVisible(false);
  };

  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <IconTeamLookBox
        onMouseOver={handleIconHover}
        onMouseOut={handleIconLeave}
      >
        <Icon iconName={'icon-paw-team'} />
      </IconTeamLookBox>

      {isTeamVisible && <Footer />}
      <Footer />
    </>
  );
}

export default SharedLayout;
