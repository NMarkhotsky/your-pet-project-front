import { StyledLink, Span, LinkStyled } from "./Header.styled";
import logo from "../../assets/images/logo.png";
import icon from "../../assets/icons/sprite.svg";

export const Header = () => {
  return (
    <header>
      <StyledLink to="/">
        <img src={logo} width={162} />
      </StyledLink>
      <nav>
        <StyledLink to="">News</StyledLink>
        <StyledLink to="">Find pet</StyledLink>
        <StyledLink to="">Our friends</StyledLink>
      </nav>
      <div>
        <LinkStyled>
          Log <Span>in</Span>
          <svg>
            <use href={`${icon}#icon-pawprint`} />
          </svg>
        </LinkStyled>
        <LinkStyled>Registration</LinkStyled>
      </div>
    </header>
  );
};
