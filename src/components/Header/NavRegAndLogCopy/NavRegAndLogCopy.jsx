import PropTypes from 'prop-types';
import { Icon } from '../../Icon/Icon';
import {
  MainNavLinkBoxCopy,
  LinkLogStyledCopy,
  SpanCopy,
  LinkRegStyledCopy,
} from './NavRegAndLogCopy.styled';

export const NavRegAndLogCopy = ({ handleToggleBurger }) => {
  return (
    <>
      <MainNavLinkBoxCopy>
        <LinkLogStyledCopy to="/login" onClick={handleToggleBurger}>
          Log <SpanCopy>in</SpanCopy>
          <Icon
            iconName={'icon-pawprint'}
            width={'24px'}
            height={'24px'}
            fill={'#FEF9F9'}
          />
        </LinkLogStyledCopy>
        <LinkRegStyledCopy to="/register" onClick={handleToggleBurger}>
          Registration
        </LinkRegStyledCopy>
      </MainNavLinkBoxCopy>
    </>
  );
};

NavRegAndLogCopy.propTypes = {
  handleToggleBurger: PropTypes.func.isRequired,
};
