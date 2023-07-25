import { Icon } from '../../Icon/Icon';
import {
  MainNavLinkBoxCopy,
  LinkLogStyledCopy,
  SpanCopy,
  LinkRegStyledCopy,
} from './NavRegAndLogCopy.styled';

export const NavRegAndLogCopy = () => {
  return (
    <>
      <MainNavLinkBoxCopy>
        <LinkLogStyledCopy to="/login">
          Log <SpanCopy>in</SpanCopy>
          <Icon
            iconName={'icon-pawprint'}
            width={'24px'}
            height={'24px'}
            fill={'#FEF9F9'}
          />
        </LinkLogStyledCopy>
        <LinkRegStyledCopy to="/register">Registration</LinkRegStyledCopy>
      </MainNavLinkBoxCopy>
    </>
  );
};
