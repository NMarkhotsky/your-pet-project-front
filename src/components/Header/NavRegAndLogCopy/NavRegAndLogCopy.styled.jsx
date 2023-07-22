import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { selectTablet } from '../../../utils/selectMediaRequests';

export const MainNavLinkBoxCopy = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const LinkLogStyledCopy = styled(Link)`
  width: 165px;
  height: 40px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
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

export const SpanCopy = styled.span`
  text-transform: uppercase;
`;

export const LinkRegStyledCopy = styled(Link)`
  width: 165px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.yellow};
  padding: 8px 0;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.yellow};
  border-radius: 40px;
  font-family: ${props => props.theme.fonts.main.semiBold};
  letter-spacing: 0.64px;

  &:hover {
    background: ${props => props.theme.colors.yellow};
    color: #fef9f9;
  }
`;
