import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fonts.main.medium};
  letter-spacing: 0.8px;

  &.active {
    color: ${(props) => props.theme.colors.yellow};
    border-bottom: 1px solid #ffffff;
  }

  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Span = styled.span`
    text-transform: uppercase;
`

export const LinkStyled = styled(Link)`
  padding: 8px 0;
  background-color: ${(props) => props.theme.colors.yellow};
`;
