import PropTypes from 'prop-types';
import { NavigationBox, NavigationLink, StyledLink } from './Navigation.styled';
import { NavRegAndLogCopy } from '../NavRegAndLogCopy/NavRegAndLogCopy';
import { UserMenuCopy } from '../UserMenuCopy/UserMenuCopy';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useTranslation } from 'react-i18next';

export const Navigation = ({ open, handleToggleBurger }) => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavigationBox open={open}>
        {isLoggedIn ? (
          <UserMenuCopy handleToggleBurger={handleToggleBurger} />
        ) : (
          <NavRegAndLogCopy handleToggleBurger={handleToggleBurger} />
        )}

        <NavigationLink>
          <StyledLink to="/news" onClick={handleToggleBurger}>
            {t('header_nav_news')}
          </StyledLink>
          <StyledLink to="/notices" onClick={handleToggleBurger}>
            {t('header_nav_findPet')}
          </StyledLink>
          <StyledLink to="/friends" onClick={handleToggleBurger}>
            {t('header_nav_ourFriends')}
          </StyledLink>
        </NavigationLink>
      </NavigationBox>
    </>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggleBurger: PropTypes.func.isRequired,
};
