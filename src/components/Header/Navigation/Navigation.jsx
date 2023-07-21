import PropTypes from 'prop-types';
import { NavigationBox, StyledLink } from './Navigation.styled';
import { NavRegAndLogCopy } from '../NavRegAndLogCopy/NavRegAndLogCopy';

export const Navigation = ({ open }) => {
  return (
    <>
      <NavigationBox open={open}>
        <NavRegAndLogCopy />
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices">Find pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </NavigationBox>
    </>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
};
