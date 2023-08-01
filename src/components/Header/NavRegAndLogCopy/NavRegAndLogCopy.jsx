import PropTypes from 'prop-types';
import { Icon } from '../../Icon/Icon';
import {
  MainNavLinkBoxCopy,
  LinkLogStyledCopy,
  SpanCopy,
  LinkRegStyledCopy,
} from './NavRegAndLogCopy.styled';
import { ThemeSwitcher } from '../../../shared/components/ThemeSwitcher/ThemeSwitcher';
import { t } from 'i18next';
import { Trans } from 'react-i18next';

export const NavRegAndLogCopy = ({ handleToggleBurger }) => {
  return (
    <>
      <MainNavLinkBoxCopy>
        <ThemeSwitcher />
        <LinkLogStyledCopy to="/login" onClick={handleToggleBurger}>
          <Trans i18nKey="header_nav_loginBtn">
            Log <SpanCopy>in</SpanCopy>
          </Trans>
          <Icon
            iconName={'icon-pawprint'}
            width={'24px'}
            height={'24px'}
            fill={'#FEF9F9'}
          />
        </LinkLogStyledCopy>
        <LinkRegStyledCopy to="/register" onClick={handleToggleBurger}>
          {t('header_nav_signupBtn')}
        </LinkRegStyledCopy>
      </MainNavLinkBoxCopy>
    </>
  );
};

NavRegAndLogCopy.propTypes = {
  handleToggleBurger: PropTypes.func.isRequired,
};
