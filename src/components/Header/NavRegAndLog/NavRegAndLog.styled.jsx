import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectTablet } from '../../../utils/selectMediaRequests';

export const MainNavLinkBox = styled.div`
  display: none;

  @media ${selectTablet} {
    display: flex;
    gap: 20px;
    margin-left: auto;
  }
`;

export const LinkLogStyled = styled(Link)`
  display: flex;
  height: 40px;
  justify-content: center;
  width: 165px;
  gap: 8px;
  align-items: center;
  color: ${props => props.theme.colors.bgdColor};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${props => props.theme.fontSizes.md};
  padding: 8px 0;
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
  width: 165px;
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.yellow};
  padding: 8px 0;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.yellow};
  border-radius: 40px;
  font-family: ${props => props.theme.fonts.main.semiBold};
  letter-spacing: 0.64px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.bgdColor};
  }
`;
