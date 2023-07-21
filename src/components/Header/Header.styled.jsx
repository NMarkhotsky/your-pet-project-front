import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { selectTablet, selectDesktop } from "../../utils/selectMediaRequests";

export const HeaderStyle = styled.header`
  background-color: "#FEF9F9";
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${selectTablet} {
    padding: 32px;
    padding-bottom: 0;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding-left: 16px;
    padding-right: 18px;
    padding-top: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.main.medium};
  letter-spacing: 0.8px;

  &.active {
    color: ${(props) => props.theme.colors.yellow};
  }

  :not(:last-child) {
    margin-right: 40px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media ${selectDesktop} {
    display: flex;
    gap: 40px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 116px;

  @media ${selectTablet} {
    width: 162px;
  }
`;

export const Logo = styled(Link)`
  display: block;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;

export const MainNavLinkBox = styled.div`
  display: none;

  @media ${selectTablet} {
    display: flex;
    gap: 20px;
  }
`;

export const LinkLogStyled = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #fef9f9;
  font-family: ${(props) => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${(props) => props.theme.fontSizes.md};
  padding: 8px 20px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 40px;
  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.yellow};
    border: 2px solid ${(props) => props.theme.colors.yellow};
  }

  &:hover svg use {
    fill: ${(props) => props.theme.colors.yellow};
  }
`;

export const LinkRegStyled = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.yellow};
  padding: 8px 20px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 40px;
  font-family: ${(props) => props.theme.fonts.main.semiBold};
  letter-spacing: 0.64px;

  &:hover {
    background: ${(props) => props.theme.colors.yellow};
    color: #fef9f9;
  }
`;

export const IconBurgerBox = styled.div`
  display: block;
  z-index: 99;

  @media ${selectDesktop} {
    display: none;
  }
`;
