import styled from 'styled-components';

export const BtnStyled = styled.button`
  position: relative;
  border: 2px solid ${props => props.theme.colors.blue};
  display: flex;
  gap: 12px;
  width: 248px;
  height: 40px;
  padding: 8px 28px 8px 28px;
  margin: auto;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${props => props.theme.fontSizes.md};
  background-color: ${props => props.theme.colors.white};
  border-radius: 40px;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    fill: ${props => props.theme.colors.blue};
  }
  &:hover svg use {
    fill: ${props => props.theme.colors.white};
  }
`;
export const Svg = styled.svg`
  fill: ${props => props.theme.colors.bold};
`;
