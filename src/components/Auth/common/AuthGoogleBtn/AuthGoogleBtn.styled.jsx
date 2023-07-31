import styled from 'styled-components';
import { selectPhone } from '../../../../utils';

export const GoogleBtn = styled.a`
  position: relative;

  display: flex;
  justify-content: center;

  margin-bottom: 16px;
  padding: 10px 28px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: none;
  border: 1px solid ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.main.semiBold};
  font-size: ${props => props.theme.fontSizes.lg};
  letter-spacing: 0.8px;
  transition: background ${props => props.theme.transitionHover};
  fill: #54adff;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.blueGradient};
    fill: white;
    color: white;
  }

  @media ${selectPhone} {
    text-align: center;
    align-items: center;
    height: 50px;
    font-size: 18px;
  }
`;

export const GoogleIcon = styled.div`
  position: absolute;
  left: 16px;
`;
