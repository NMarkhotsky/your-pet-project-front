import { Trans } from 'react-i18next';
import { t } from 'i18next';
import { Icon } from '../../../components/Icon/Icon';
import { ThemeSwitcher } from '../../../shared/components/ThemeSwitcher/ThemeSwitcher';
import {
  MainNavLinkBox,
  LinkLogStyled,
  Span,
  LinkRegStyled,
} from './NavRegAndLog.styled';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

export const NavRegAndLog = () => {
  return (
    <>
      <MainNavLinkBox>
        <LanguageSwitcher />
        <ThemeSwitcher />
        <LinkLogStyled to="/login">
          <Trans i18nKey="header_nav_loginBtn">
            Log <Span>in</Span>
          </Trans>
          <Icon iconName={'icon-pawprint'} width={'24px'} height={'24px'} />
        </LinkLogStyled>
        <LinkRegStyled to="/register">
          {t('header_nav_signupBtn')}
        </LinkRegStyled>
      </MainNavLinkBox>
    </>
  );
};
