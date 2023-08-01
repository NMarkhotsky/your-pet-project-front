import styled from 'styled-components';

export const BtnStyled = styled.button`
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 248px;
  height: 40px;
  padding: 8px 28px 8px 28px;
  letter-spacing: 0.64px;
  border-radius: 40px;
  outline: transparent;

  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.main.bold};
  border: 2px solid ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.md};
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    border: transparent;
    background: ${props => props.theme.colors.blueGradient};
    transition: all ${props => props.theme.transitionHover};
  }

  &:hover svg use,
  &:focus svg use {
    fill: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transitionHover};
  }
`;
