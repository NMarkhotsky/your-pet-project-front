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

export const HeaderStyle = styled.header`
  display: flex;
`;

export const Image = styled.img`
  display: block;
`;

export const Logo = styled(Link)`
  display: block;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;

export const LinkLogStyled = styled(Link)`
  color: #fef9f9;
  padding: 8px 20px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 40px;
`;

export const LinkRegStyled = styled(Link)`
  color: ${(props) => props.theme.colors.yellow};
  padding: 8px 20px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 40px;
`;
