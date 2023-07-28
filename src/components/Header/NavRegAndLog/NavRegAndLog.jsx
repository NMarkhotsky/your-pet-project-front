import { Icon } from '../../../components/Icon/Icon';
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
        <LinkLogStyled to="/login">
          Log <Span>in</Span>
          <Icon
            iconName={'icon-pawprint'}
            width={'24px'}
            height={'24px'}
            fill={'#FEF9F9'}
          />
        </LinkLogStyled>
        <LinkRegStyled to="/register">
          Registration
        </LinkRegStyled>
      </MainNavLinkBox>
    </>
  );
};
