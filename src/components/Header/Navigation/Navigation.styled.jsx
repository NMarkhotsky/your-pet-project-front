import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  selectDesktop,
} from '../../../utils/selectMediaRequests';

export const StyledLink = styled(NavLink)`
  @media (max-width: 767px) {
    font-size: ${props => props.theme.fontSizes.xxxl};
    letter-spacing: 1.28px;
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.huge};
    letter-spacing: 1.92px;
  }

  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.lg};
  font-family: ${props => props.theme.fonts.main.medium};
  letter-spacing: 0.8px;

  &.active {
    color: ${props => props.theme.colors.yellow};
  }

  :not(:last-child) {
    margin-right: 40px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
  }

  @media ${selectDesktop} {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const NavigationBox = styled.nav`
  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    top: 0;
    right: 0;
    gap: 60px;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  @media ${selectDesktop} {
    display: flex;
    gap: 40px;
  }
`;
