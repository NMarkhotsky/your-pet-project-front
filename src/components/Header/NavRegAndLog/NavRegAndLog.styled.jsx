import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectTablet } from '../../../utils/selectMediaRequests';

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
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${props => props.theme.fontSizes.md};
  padding: 8px 20px;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 40px;
  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.yellow};
    border: 2px solid ${props => props.theme.colors.yellow};
  }

  &:hover svg use {
    fill: ${props => props.theme.colors.yellow};
  }
`;

export const Span = styled.span`
  text-transform: uppercase;
`;

export const LinkRegStyled = styled(Link)`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.yellow};
  padding: 8px 20px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.yellow};
  border-radius: 40px;
  font-family: ${props => props.theme.fonts.main.semiBold};
  letter-spacing: 0.64px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => props.theme.colors.yellow};
    color: #fef9f9;
  }
`;
