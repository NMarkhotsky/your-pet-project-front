import { NavLink as StyledNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const UserMenuBox = styled.div`
  display: none;

  @media ${selectTablet} {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
  }
`;

export const UserMenuButton = styled.button`
  display: flex;
  height: 40px;
  justify-content: center;
  width: 135px;
  gap: 8px;
  align-items: center;
  color: ${props => props.theme.colors.textBtn};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${props => props.theme.fontSizes.md};
  padding: 8px 0;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 40px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    z-index: 101;
  }

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: ${props => props.theme.colors.blueDark};

    transition: ${({ theme }) => theme.transitionHover};
  }
`;

export const UserMenuName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.yellow};
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;
`;

export const NavLink = styled(StyledNavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.yellow};
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;
`;
