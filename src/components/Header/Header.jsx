import {
  StyledLink,
  Span,
  LinkLogStyled,
  LinkRegStyled,
  Image,
  Logo,
  HeaderStyle,
  Navigation,
  MainNavLinkBox,
  IconBurgerBox,
} from './Header.styled';
import logo from '../../assets/images/logo.png';
import { Icon } from '../../components/Icon/Icon';

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo to="/">
        <Image src={logo} />
      </Logo>
      <Navigation>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices">Find pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </Navigation>
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
        <LinkRegStyled to="/register">Registration</LinkRegStyled>
      </MainNavLinkBox>

      <IconBurgerBox>
        <Icon
          iconName={'icon-menu-hamburger'}
          width={'24px'}
          height={'24px'}
          stroke={'#FFC107'}
        />
      </IconBurgerBox>
    </HeaderStyle>
  );
};
