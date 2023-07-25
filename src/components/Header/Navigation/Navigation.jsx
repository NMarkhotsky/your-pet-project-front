import PropTypes from 'prop-types';
import { NavigationBox, StyledLink } from './Navigation.styled';
import { NavRegAndLogCopy } from '../NavRegAndLogCopy/NavRegAndLogCopy';
import { UserMenuCopy } from '../UserMenuCopy/UserMenuCopy';
import { useAuth } from '../../../hooks/useAuth/useAuth';


export const Navigation = ({ open }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavigationBox open={open}>
        {isLoggedIn ? <UserMenuCopy /> : <NavRegAndLogCopy />}

        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices" >Find pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </NavigationBox>
    </>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
};
