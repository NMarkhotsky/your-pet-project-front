import PropTypes from 'prop-types';
import { Icon } from '../../Icon/Icon';
import {
  MainNavLinkBoxCopy,
  LinkLogStyledCopy,
  SpanCopy,
  LinkRegStyledCopy,
  SwitcherWrapper,
  LinkWrapper,
} from './NavRegAndLogCopy.styled';
import { ThemeSwitcher } from '../../../shared/components/ThemeSwitcher/ThemeSwitcher';
import { t } from 'i18next';
import { Trans } from 'react-i18next';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

export const NavRegAndLogCopy = ({ handleToggleBurger }) => {
  return (
    <>
      <MainNavLinkBoxCopy>
        <SwitcherWrapper>
          <LanguageSwitcher />
          <ThemeSwitcher size={50} />
        </SwitcherWrapper>
        <LinkWrapper>
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
        </LinkWrapper>
      </MainNavLinkBoxCopy>
    </>
  );
};

NavRegAndLogCopy.propTypes = {
  handleToggleBurger: PropTypes.func.isRequired,
};
