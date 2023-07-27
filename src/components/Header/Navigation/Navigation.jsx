import PropTypes from 'prop-types';
import { NavigationBox, StyledLink } from './Navigation.styled';
import { NavRegAndLogCopy } from '../NavRegAndLogCopy/NavRegAndLogCopy';
import { UserMenuCopy } from '../UserMenuCopy/UserMenuCopy';
import { useAuth } from '../../../hooks/useAuth/useAuth';

export const Navigation = ({ open, handleToggleBurger }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavigationBox open={open}>
        {isLoggedIn ? (
          <UserMenuCopy handleToggleBurger={handleToggleBurger} />
        ) : (
          <NavRegAndLogCopy handleToggleBurger={handleToggleBurger} />
        )}

        <StyledLink to="/news" onClick={handleToggleBurger}>
          News
        </StyledLink>
        <StyledLink to="/notices" onClick={handleToggleBurger}>
          Find pet
        </StyledLink>
        <StyledLink to="/friends" onClick={handleToggleBurger}>
          Our friends
        </StyledLink>
      </NavigationBox>
    </>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggleBurger: PropTypes.func.isRequired,
};
