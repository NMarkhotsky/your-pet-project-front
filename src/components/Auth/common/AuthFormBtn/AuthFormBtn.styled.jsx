import styled from 'styled-components';

export const FormBtn = styled.button`
  margin-bottom: 16px;
  padding: 10px 28px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: none;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.main.semiBold};
  font-size: ${props => props.theme.fontSizes.lg};
  letter-spacing: 0.8px;
  /* transition: background ${props => props.theme.transitionHover}; */

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.blueGradient};
  }
`;
