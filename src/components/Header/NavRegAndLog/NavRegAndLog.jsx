// import PropTypes from 'prop-types';
import { Icon } from '../../../components/Icon/Icon';
import { ThemeSwitcher } from '../../../shared/components/ThemeSwitcher/ThemeSwitcher';
import {
  MainNavLinkBox,
  LinkLogStyled,
  Span,
  LinkRegStyled,
} from './NavRegAndLog.styled';

export const NavRegAndLog = () => {
  return (
    <>
      <MainNavLinkBox>
        <ThemeSwitcher />
        <LinkLogStyled to="/login">
          Log <Span>in</Span>
          <Icon iconName={'icon-pawprint'} width={'24px'} height={'24px'} />
        </LinkLogStyled>
        <LinkRegStyled to="/register">Registration</LinkRegStyled>
      </MainNavLinkBox>
    </>
  );
};

// NavRegAndLog.propTypes = {
//   handleToggleBurger: PropTypes.func.isRequired,
// };
