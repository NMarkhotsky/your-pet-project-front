import {
  StyledLink,
  Span,
  LinkLogStyled,
  LinkRegStyled,
  Image,
  Logo,
  HeaderStyle,
} from "./Header.styled";
import logo from "../../assets/images/logo.png";
import icon from "../../assets/icons/sprite.svg";

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo to="/">
        <Image src={logo} width={162} />
      </Logo>
      <nav>
        <StyledLink to="">News</StyledLink>
        <StyledLink to="">Find pet</StyledLink>
        <StyledLink to="">Our friends</StyledLink>
      </nav>
      <div>
        <LinkLogStyled>
          Log <Span>in</Span>
          <svg width="24" height="24">
            <use href={`${icon}#icon-pawprint`} fill="#FEF9F9" />
          </svg>
        </LinkLogStyled>
        <LinkRegStyled>Registration</LinkRegStyled>
      </div>
    </HeaderStyle>
  );
};
